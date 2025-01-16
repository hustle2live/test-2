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
import { URLPathSelectors } from '../common/constants/page.selectors';

interface BCInterface extends WorkerInterface {
   init(options?: LaunchOptions): Promise<void>;
   close(): Promise<void>;
   setPage(data: Page): void;
   browsePage(link: string): Promise<Page | void>;
   clickOnLocator(tagName: string): Promise<void>;
   pageHasElement(page: Page, tagElement: string): Locator<Element> | null;
   tryLogin(props: LoginTypeProps): Promise<Page | null>;
}

class BrowserController extends AbstractWorker implements BCInterface {
   static browser: Browser;
   static page: Page;
   static puppy: typeof puppeteer;

   constructor(puppeteer: PuppeteerNode) {
      super();
      BrowserController.puppy = puppeteer;
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

   checkFunction<T, P>(result: T, func: (a?: P) => T) {
      const res = func();
      if (!res) {
         const message = 'check-function ERRROR';
         console.log(message);
         throw Error(message);
      }
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
      if (!BrowserController.page) {
         console.log('page is a false value');
         throw Error('page is a false value');
      }
      await BrowserController.page.locator(tagName).click();
   }

   private pageUrlIncludes(page: Page, query: string): boolean {
      const url = page.url();
      this.log(`___ page url ___ : ${url}`);
      return Boolean(url.includes(query));
   }

   private getPageURL(): string {
      return BrowserController.page.url();
   }

   async tryLogin({
      formProps,
      dataProps,
   }: LoginTypeProps): Promise<Page | null> {
      const { loginTagName, passwordTagName, submitTagName } = formProps;
      const { login, password } = dataProps;

      if (!BrowserController.page) return null;
      await BrowserController.page.locator(loginTagName).fill(login);
      await BrowserController.page.locator(passwordTagName).fill(password);
      await BrowserController.page.locator(submitTagName).click();

      await this.delayFunction(this.getPageURL, 3000);

      const changePageFailed: boolean = this.pageUrlIncludes(
         BrowserController.page,
         URLPathSelectors.LOGIN
      );

      this.log(`Operation login ${changePageFailed ? 'failed' : 'success'}`);
      this.log(await BrowserController.page.title());
      return changePageFailed ? null : BrowserController.page;
   }

   pageHasElement(page: Page, tagElement: string): Locator<Element> | null {
      if (!BrowserController.page) return null;
      return BrowserController.page.locator(tagElement);
   }
}

export { BCInterface };

export default BrowserController;
