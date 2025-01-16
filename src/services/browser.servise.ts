import puppeteer, {
   Browser,
   Page,
   Locator,
   LaunchOptions,
   PuppeteerNode,
} from 'puppeteer';
import { dataProps, formProps, LoginTypeProps } from './credentials';
import {
   AbstractWorker,
   WorkerInterface,
} from '../common/types/task-workers.type';

interface BCInterface extends WorkerInterface {
   init(options?: LaunchOptions): Promise<void>;
   close(): Promise<void>;
   setPage(data: Page): void;
   browsePage(link: string): Promise<Page | void>;
   clickOnLocator(tagName: string): Promise<void>;
   pageHasElement(page: Page, tagElement: string): Locator<Element> | null;
   tryLogin(
      {
         loginTag,
         passwordTag,
         submitTag,
      }: { loginTag: string; passwordTag: string; submitTag: string },
      { login, password }: { login: string; password: string }
   ): Promise<Page | null>;
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

   setPage(data: Page): void {
      if (!data) return this.log('Ooops page is missed, and do not saved.');
      BrowserController.page = data;
      this.log(
         'page saved to (pagetitle): ' + this.pageHasElement(data, 'title')
      );
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
      this.setPage(page);
      return page;
   }

   async clickOnLocator(tagName: string): Promise<void> {
      if (!BrowserController.page) {
         console.log('page is a false value');
         throw Error('page is a false value');
      }
      await BrowserController.page.locator(tagName).click();
   }

   async tryLogin(
      { loginTag, passwordTag, submitTag }: formProps,
      { login, password }: dataProps
   ): Promise<Page | null> {
      if (!BrowserController.page) return null;
      await BrowserController.page.locator(loginTag).fill(login);
      await BrowserController.page.locator(passwordTag).fill(password);
      await BrowserController.page.locator(submitTag).click();

      // this.log('Login succesfull');
      return BrowserController.page;
   }

   pageHasElement(page: Page, tagElement: string): Locator<Element> | null {
      if (!BrowserController.page) return null;
      return BrowserController.page.locator(tagElement);
   }
}

export { BCInterface };

export default BrowserController;
