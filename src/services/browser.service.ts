import { LoginTypeProps } from '../common/constants/credentials';
import { AbstractWorker } from '../controllers/abstract.controller';
import {
   ActionSelectors,
   DataSelectors,
   TaskNames,
   URLPathSelectors,
} from '../common/constants/page.selectors';
import {
   PopupCloserProps,
   TUsersListProps,
   UserReactProps,
} from '../common/types/pageData.type';
import { BCInterface } from '../common/types/browserController.type';
import { PuppeteerService, LaunchOptions, Page } from './puppeteer.service';
import { UserService } from './user.service';

class BrowserController extends AbstractWorker implements BCInterface {
   private puppeteerService: PuppeteerService;
   private userService: UserService;

   constructor(puppeteerService: PuppeteerService, userService: UserService) {
      super();
      this.puppeteerService = puppeteerService;
      this.userService = userService;
   }

   currentPage(): Page {
      return this.puppeteerService.getCurrentPage();
   }

   async init(options: LaunchOptions = {}): Promise<void> {
      await this.puppeteerService.init(options);
      this.log('\x1b[32m Init success. \x1b[30m Browser launched.');
   }

   async close(): Promise<void> {
      await this.puppeteerService.close();
   }

   async restart(): Promise<void> {
      await this.puppeteerService.restart();
   }

   async browsePage(link: string): Promise<Page> {
      return await this.puppeteerService.newPage(link);
   }

   async tryLogin({ formProps, dataProps }: LoginTypeProps): Promise<boolean> {
      const { loginTagName, passwordTagName, submitTagName } = formProps;
      const { login, password } = dataProps;
      const page = this.puppeteerService.getCurrentPage();

      if (
         !loginTagName ||
         !passwordTagName ||
         !submitTagName ||
         !login ||
         !password
      ) {
         throw new Error('Login data missed');
      }

      await page.waitForSelector('form');
      await page.locator(loginTagName).fill(login);
      await page.locator(passwordTagName).fill(password);
      await page.locator(submitTagName).click();

      await this.delayFunction(() => page.waitForSelector('body'), 2000);

      const pageChangedSuccess = !page.url().includes(URLPathSelectors.LOGIN);
      if (!pageChangedSuccess) {
         throw new Error(`\x1b[31m Login failed \x1b[30m `);
      }
      this.log(`\x1b[32m Operation login success \x1b[30m `);
      return pageChangedSuccess;
   }

   async checkPopupToClose(props: PopupCloserProps): Promise<void> {
      const { popupHeading, popupClosers } = props;
      const page = this.puppeteerService.getCurrentPage();

      try {
         this.log('\x1b[35m Trying close popup... \x1b[30m ');
         await page.waitForSelector(popupHeading);
         for (const item of popupClosers) {
            await this.puppeteerService.tryClickOnLocator(item);
         }
      } catch (error) {
         this.log('Popup not recognized');
      }
   }

   async getUsersListData(): Promise<TUsersListProps> {
      const page = this.puppeteerService.getCurrentPage();
      return await page.$$eval(DataSelectors.USERS_ITEM, (items) => {
         let activeIdx: number | null = null;
         const { innerHTML } = items.filter((el, idx) => {
            if (!el.getAttribute('style')?.includes('display: none')) {
               activeIdx = idx;
               return el;
            }
         })[0];

         if (!activeIdx && activeIdx !== 0) {
            throw Error('No user item displayed');
         }

         return {
            usersLength: items.length,
            activeUserIdx: activeIdx,
            activeUserHTML: innerHTML,
         };
      });
   }

   async reactOnUser({ userData, allowedAge }: UserReactProps): Promise<void> {
      const { age, name } = await this.userService.parseUserFromHTML(userData);
      if (!age || !name) {
         throw new Error("Can't parse user from html");
      }

      this.log(`__data_parsed: ${name} : ${age}`);

      const page = this.puppeteerService.getCurrentPage();
      const action =
         age >= allowedAge
            ? ActionSelectors.BUTTON_LIKE
            : ActionSelectors.BUTTON_DISLIKE;

      try {
         await page.locator(action).click();
         this.log(
            `User: ${name}, ${age} - ${age >= allowedAge ? 'liked' : 'skiped'}`
         );
      } catch (error) {
         this.log('Error while clicking like/dislike');
         await this.makeScreen(page, TaskNames.likes);
         throw new Error(
            error instanceof Error ? error.message : String(error)
         );
      }

      await this.userService.checkUsersOrder({ name, age });
   }
}

export default BrowserController;
