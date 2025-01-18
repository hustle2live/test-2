import puppeteer, {
   Browser,
   LaunchOptions,
   Page,
   PuppeteerNode,
} from 'puppeteer';
import { IPuppeteerService as PSInterface } from '../common/types/browserController.type';
import { AbstractWorker } from '../controllers/abstract.controller';

class PuppeteerService extends AbstractWorker implements PSInterface {
   private browser: Browser | null = null;
   private page: Page | null = null;
   private puppeteer: PuppeteerNode;

   constructor(puppeteer: PuppeteerNode) {
      super();
      this.puppeteer = puppeteer;
   }

   async init(options: LaunchOptions = {}): Promise<void> {
      this.browser = await this.puppeteer.launch(options);
      this.log('Browser launched.');
   }

   async close(): Promise<void> {
      if (this.browser) {
         await this.browser.close();
         this.log('Browser closed');
      }
   }

   async restart(): Promise<void> {
      await this.close();
      await this.init();
   }

   async newPage(url: string): Promise<Page> {
      if (!this.browser) throw new Error('Browser not initialized');
      const page = await this.browser.newPage();
      await page.goto(url, { waitUntil: 'load' });
      await page.setViewport({ width: 1080, height: 1024 });
      this.page = page;
      this.log('Page loaded successfully');
      return page;
   }

   getCurrentPage(): Page {
      if (!this.page) throw new Error('No active page');
      return this.page;
   }

   async tryClickOnLocator(target: string): Promise<void> {
      if (!this.page) throw new Error('No active page');
      await this.page.locator(target)?.click();
   }
}

const puppeteerService = new PuppeteerService(puppeteer);

export {
   puppeteerService,
   type PuppeteerService,
   puppeteer,
   Browser,
   LaunchOptions,
   Page,
   PuppeteerNode,
};
