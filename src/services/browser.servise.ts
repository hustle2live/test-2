import puppeteer, {
   Browser,
   Page,
   Locator,
   LaunchOptions,
   PuppeteerNode,
} from 'puppeteer';
import {
   TFormProps,
   TDataProps,
   LoginTypeProps,
} from '../common/constants/credentials';
import {
   AbstractWorker,
   WorkerInterface,
} from '../common/types/task-workers.type';
import {
   ActionSelectors,
   DataSelectors,
   URLPathSelectors,
} from '../common/constants/page.selectors';
import { TUsersListProps } from '../common/types/page-data.type';

interface BCInterface extends WorkerInterface {
   init(options?: LaunchOptions): Promise<void>;
   close(): Promise<void>;
   setPage(data: Page): void;
   browsePage(link: string): Promise<Page | void>;
   clickOnLocator(tagName: string): Promise<void>;
   findElement(tagElement: string, page?: Page): Locator<Element> | null;
   tryLogin(props: LoginTypeProps): Promise<Page | null>;
   checkStartPopup(): Promise<void | true>;
   currentPage(): Page;
   getUsersListData(): Promise<TUsersListProps>;
}

class BrowserController extends AbstractWorker implements BCInterface {
   static browser: Browser;
   static page: Page;
   static puppy: typeof puppeteer;

   constructor(puppeteer: PuppeteerNode) {
      super();
      BrowserController.puppy = puppeteer;
   }
   currentPage(): Page {
      return BrowserController.page;
   }

   async init(options: LaunchOptions = {}): Promise<void> {
      BrowserController.browser = await BrowserController.puppy.launch(options);
      this.log('Browser launched. Init success');
   }

   async close(): Promise<void> {
      if (!BrowserController.browser) {
         return;
      }
      await BrowserController.browser.close();
      this.log('Browser closed');
   }

   async setPage(data: Page): Promise<void> {
      if (!data) return this.log('Ooops page is missed, and do not saved.');
      BrowserController.page = data;
      const pageTitle = await BrowserController.page.title();
      this.log('page saved to (pagetitle): ' + pageTitle);
   }

   async browsePage(link: string): Promise<Page | void> {
      const page = BrowserController.page
         ? BrowserController.page
         : await BrowserController.browser.newPage();

      await page.goto(link, { waitUntil: 'load' });

      if (!page) throw new Error('Can not load page');
      await page.setViewport({ width: 1080, height: 1024 });

      this.log('Page loaded successfully');
      await this.setPage(page);
      return page;
   }

   async clickOnLocator(tagName: string): Promise<void> {
      this.findElement(tagName, BrowserController.page)?.click();
   }

   private pageUrlIncludes(page: Page, query: string): boolean {
      const url = page.url();
      this.log(`___ page url ___ : ${url}`);
      return Boolean(url.includes(query));
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

   async checkStartPopup(): Promise<void | true> {
      await BrowserController.page
         .waitForSelector(DataSelectors.AFTER_LOGIN_POPUP)
         .then(async () => {
            await this.clickOnLocator(DataSelectors.AFTER_LOGIN_BUTTON_NEXT);
         })
         .then(async () => {
            if (this.findElement(DataSelectors.AFTER_LOGIN_POPUP)) {
               await this.clickOnLocator(
                  DataSelectors.AFTER_LOGIN_BUTTON_CLOSE
               );
            }
            return true;
         });
   }

   async tryLogin({
      formProps,
      dataProps,
   }: LoginTypeProps): Promise<Page | null> {
      const { loginTagName, passwordTagName, submitTagName } = formProps;
      const { login, password } = dataProps;
      const allTrully = [
         loginTagName,
         passwordTagName,
         submitTagName,
         login,
         password,
         BrowserController.page,
      ].every((el) => Boolean(el) === true);

      if (!allTrully) {
         this.log('Error. Page or loginData - missed');
         return null;
      }

      await BrowserController.page.locator(loginTagName).fill(login);
      await BrowserController.page.locator(passwordTagName).fill(password);
      await BrowserController.page.locator(submitTagName).click();

      await this.delayFunction(this.getPageURL, 2000);
      const isChangePageFailed: boolean = this.pageUrlIncludes(
         BrowserController.page,
         URLPathSelectors.LOGIN
      );
      this.log(`Operation login ${isChangePageFailed ? 'failed' : 'success'}`);
      return isChangePageFailed ? null : BrowserController.page;
   }

   async getUsersListData(): Promise<TUsersListProps> {
      return await BrowserController.page.$$eval(
         DataSelectors.USERS_ITEM,
         (itemArray) => {
            let showedIdx: number | null = null;
            const { length } = itemArray;
            const { innerHTML } = itemArray.filter((el, idx) => {
               if (!el.getAttribute('style')?.includes('display: none')) {
                  showedIdx = idx;
                  return el;
               }
            })[0];

            return {
               length: length,
               showedIdx: showedIdx,
               innerHTML: innerHTML,
            };
         }
      );
   }
}

export { BCInterface };

export default BrowserController;
