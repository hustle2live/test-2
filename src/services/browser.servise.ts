import puppeteer, {
   Browser,
   Page,
   Locator,
   LaunchOptions,
   PuppeteerNode,
} from 'puppeteer';
import { LoginTypeProps } from '../common/constants/credentials';
import { AbstractWorker } from '../common/types/taskWorkers.type';
import {
   ActionSelectors,
   DataSelectors,
   TaskNames,
   URLPathSelectors,
} from '../common/constants/page.selectors';
import {
   PopupCloserProps,
   TUsersListProps,
} from '../common/types/pageData.type';
import { BCInterface } from '../common/types/browserController.type';
import { HTMLdataParser } from '../common/helpers/dataParser';

class BrowserController extends AbstractWorker implements BCInterface {
   static browser: Browser;
   static page: Page;
   static puppy: typeof puppeteer;
   private dataParser: typeof HTMLdataParser;
   private userComparingList: { name: string; age: number }[] = [];

   constructor(puppeteer: PuppeteerNode) {
      super();
      BrowserController.puppy = puppeteer;
      this.dataParser = HTMLdataParser;
   }
   currentPage(): Page {
      return BrowserController.page;
   }

   async init(options: LaunchOptions = {}): Promise<void> {
      BrowserController.browser = await BrowserController.puppy.launch(options);
      this.log('Init success. Browser launched.');
   }

   async close(): Promise<void> {
      await BrowserController.browser.close();
      this.log('Browser closed');
   }

   async restart(): Promise<void> {
      await this.close();
      await this.init();
   }

   async setPage(data: Page): Promise<void> {
      try {
         BrowserController.page = data;
         const pageTitle = await data.title();
         this.log('followed to page (pagetitle): ' + pageTitle);
      } catch {
         throw new Error('Ooops page is missed, and do not saved.');
      }
   }

   async browsePage(link: string): Promise<Page> {
      const page = await BrowserController.browser.newPage();
      await page.goto(link, { waitUntil: 'load' });
      if (!page) {
         throw new Error('Can not load page');
      }
      try {
         await page.setViewport({ width: 1080, height: 1024 });
      } catch (error) {
         this.log("Can't set viewport");
      }
      this.log('Page loaded successfully');
      await this.setPage(page);
      return page;
   }

   async clickTryOnLocator(tagName: string): Promise<void> {
      return this.findElement(tagName, BrowserController.page)?.click();
   }

   private pageUrlIncludes(page: Page, query: string): boolean {
      const url = page.url();
      this.log(`___ page url ___ : ${url}`);
      return url.includes(query);
   }

   private getPageURL(): string {
      return BrowserController.page.url();
   }

   findElement(
      tagElement: string,
      page: Page = BrowserController.page
   ): Locator<Element> | null {
      if (!page) {
         this.log(
            'Error while findElement(): BrowserController.page - is missed !'
         );
         return null;
      }
      return page.locator(tagElement);
   }

   async checkPopupToClose(props: PopupCloserProps): Promise<void> {
      const { popupHeading, popupClosers } = props;

      await BrowserController.page
         .waitForSelector(popupHeading)
         .then(async () => {
            try {
               this.log('...Trying close popup');
               for (const item of popupClosers) {
                  await this.clickTryOnLocator(item);
               }
            } catch (error) {
               this.log("Popup don't recognized");
               this.log((error as Error)?.message);
            }
         });
   }

   async tryLogin({ formProps, dataProps }: LoginTypeProps): Promise<boolean> {
      const { loginTagName, passwordTagName, submitTagName } = formProps;
      const { login, password } = dataProps;
      const allPropsReceived = [
         loginTagName,
         passwordTagName,
         submitTagName,
         login,
         password,
         BrowserController.page,
      ].every((el) => Boolean(el) === true);

      if (!allPropsReceived) {
         throw new Error('Error. Page or loginData - missed');
      }

      await BrowserController.page.waitForSelector('form').then(async () => {
         await BrowserController.page.locator(loginTagName).fill(login);
         await BrowserController.page.locator(passwordTagName).fill(password);
         await BrowserController.page.locator(submitTagName).click();
      });

      await this.delayFunction(this.getPageURL, 2000);
      const pageChangedSuccess: boolean = !this.pageUrlIncludes(
         BrowserController.page,
         URLPathSelectors.LOGIN
      );

      if (!pageChangedSuccess) {
         throw new Error(`Operation login failed`);
      }

      this.log(`Operation login success`);
      return pageChangedSuccess;
   }

   async getUsersListData(): Promise<TUsersListProps> {
      return await BrowserController.page.$$eval(
         DataSelectors.USERS_ITEM,
         (itemArray) => {
            let displayedUserIndex: number | null = null;
            const { length } = itemArray;
            const { innerHTML } = itemArray.filter((el, idx) => {
               if (!el.getAttribute('style')?.includes('display: none')) {
                  displayedUserIndex = idx;
                  return el;
               }
            })[0];

            if (!displayedUserIndex && displayedUserIndex !== 0) {
               throw Error('Noone user item showed');
            }

            if (!length || !innerHTML) {
               throw new Error('User list or User HTML is empty');
            }

            return {
               usersLength: length,
               activeUserIdx: displayedUserIndex,
               activeUserHTML: innerHTML,
            };
         }
      );
   }

   private async parseUserFromHTML(
      htmlString: string
   ): Promise<{ age: number | null; name: string | null }> {
      const result = await this.dataParser(htmlString);
      this.log(`__data_parsed: ${result.name} : ${result.age}`);
      return result;
   }

   private async checkUsersOrder(
      userName: string,
      userAge: number
   ): Promise<{ name: string; age: number }[]> {
      const maxLength = 3;
      this.userComparingList.unshift({ name: userName, age: userAge });

      const userListItemIsCycled =
         this.userComparingList.every(
            ({ age, name }) => age === userAge && name === userName
         ) && this.userComparingList.length > 2;

      this.userComparingList.length = maxLength;

      if (userListItemIsCycled) {
         throw new Error(
            `Users repeated:: ${JSON.stringify(this.userComparingList)}`
         );
      }

      return this.userComparingList;
   }

   async reactOnUser({
      userData,
      allowedAge,
   }: {
      userData: string;
      allowedAge: number;
   }): Promise<void> {
      if (!userData || !allowedAge) {
         throw new Error('Missed users html or confirmed age');
      }

      const { age, name } = await this.parseUserFromHTML(userData);
      if (!age || !name) {
         throw new Error("Can't parse user from html");
      }

      const ageIsOk = age >= allowedAge;

      const reactionLocator = ageIsOk
         ? ActionSelectors.BUTTON_LIKE
         : ActionSelectors.BUTTON_DISLIKE;

      try {
         await BrowserController.page.locator(reactionLocator).click();
         this.log(`- user: ${name}, ${age} - ${ageIsOk ? 'liked' : 'skiped'}`);
      } catch (error) {
         this.log('Error occured while click like-dislike');
         await this.makeScreen(BrowserController.page, TaskNames.likes);
         throw new Error((error as Error)?.message ?? error);
      }

      await this.checkUsersOrder(name, age);
   }
}

export { BCInterface };

export default BrowserController;
