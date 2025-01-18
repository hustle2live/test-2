import { Page } from 'puppeteer';
import { prepareFolder } from '../common/helpers/makeDir';
import {
   ResponderInterface,
   WorkerInterface,
} from '../common/types/taskWorkers.type';
import { TaskResponse } from './tasks.controller';

abstract class AbstractWorker implements WorkerInterface {
   static imageCounter: number = 1;

   log(m: string): void {
      console.log(`~log:: ${m}`);
   }

   async makeScreen(page: Page, path?: string): Promise<void> {
      if (!page) return;
      const baseFolder = './screenshots/';
      const dirName = !path ? baseFolder : `${baseFolder}${path}/`;
      prepareFolder(dirName);
      const counter = AbstractWorker.imageCounter;
      await page.screenshot({ path: `${dirName}img-${counter}.png` });
      this.log(`\x1b[36m Screenshot ${counter} captured!\x1b[30m `);
      AbstractWorker.imageCounter++;
   }

   async delayFunction<T>(fn: Function, ms: number): Promise<T> {
      await new Promise((resolve) => setTimeout(resolve, ms));
      this.log(`_delayed for ${ms} ms`);
      return await fn();
   }
}

abstract class AbstractResponder
   extends AbstractWorker
   implements ResponderInterface, WorkerInterface
{
   private sendResponse(
      success: boolean,
      message: string,
      data?: TaskResponse['data'] | undefined
   ): TaskResponse {
      return { success, message, data };
   }

   sendSuccess(data?: Pick<TaskResponse, 'data'>): TaskResponse {
      return this.sendResponse(true, 'task completed', data);
   }

   sendError(errorMessage: string): TaskResponse {
      return this.sendResponse(false, errorMessage);
   }
}

export { AbstractResponder, AbstractWorker };
