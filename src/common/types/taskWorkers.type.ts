import { type Page } from 'puppeteer';
import { prepareFolder } from '../helpers/makedir';

interface ITaskNames {
   login: string;
   likes: string;
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
   delayFunction: <T>(fn: Function, ms: number) => Promise<T>;
}

abstract class AbstractWorker implements WorkerInterface {
   static imageCounter: number = 1;
   log(m: string): void {
      console.log(`~log:: ${m}`);
   }
   async makeScreen(page: Page, path?: string): Promise<void> {
      if (!page) return;
      let subDirPath = '';

      if (path) {
         subDirPath = `${path}/`;
         prepareFolder(`./screenshots/${subDirPath}`);
      }

      await page.screenshot({
         path: `./screenshots/${subDirPath}img-${AbstractWorker.imageCounter}.png`,
      });
      this.log(`Screenshot ${AbstractWorker.imageCounter} captured !`);
      AbstractWorker.imageCounter++;
   }
   async delayFunction<T>(fn: Function, ms: number): Promise<T> {
      await new Promise((resolve) => setTimeout(resolve, ms));
      this.log(`_delayed for ${ms} ms`);
      return await fn();
   }
}

export {
   ITaskNames,
   TaskResponse,
   AbstractTaskInterface,
   WorkerInterface,
   AbstractWorker,
};
