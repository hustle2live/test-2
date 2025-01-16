import { type Page } from 'puppeteer';
import fs from 'node:fs';

function preparefolder(folderName?: string) {
   if (!folderName) return;
   try {
      if (!fs.existsSync(folderName)) {
         fs.mkdirSync(folderName);
      }
   } catch (err) {
      console.error(err);
   }
}

interface TaskResponse {
   success: boolean;
   message: string;
   data?: Page | HTMLBodyElement | {};
}

interface AbstractTaskInterface {
   sendSuccess: (props: Omit<TaskResponse, 'success'>) => void;
   sendError: (message: string) => void;
}

interface WorkerInterface {
   log: (m: string) => void;
   makeScreen: (page: Page, path?: string) => Promise<void>;
}

abstract class AbstractWorker implements WorkerInterface {
   static imageCounter: number = 1;
   log(m: string): void {
      console.log(m);
   }
   async makeScreen(page: Page, path?: string): Promise<void> {
      if (!page) return;
      let subDirPath = '';

      if (path) {
         subDirPath = `${path}/`;
         preparefolder(`./screenshots/${subDirPath}`);
      }

      await page.screenshot({
         path: `./screenshots/${subDirPath}img-${AbstractWorker.imageCounter}.png`,
      });
      this.log(`Screenshot ${AbstractWorker.imageCounter} captured !`);
      AbstractWorker.imageCounter++;
   }
}

export { TaskResponse, AbstractTaskInterface, WorkerInterface, AbstractWorker };
