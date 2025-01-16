import puppeteer, { Page } from 'puppeteer';
import BrowserController, { BCInterface } from './browser.servise';
import { loginFormProps, loginData } from './credentials';
import {
   AbstractTaskInterface,
   AbstractWorker,
   TaskResponse,
} from '../common/types/task-workers.type';

class AbstractTask extends AbstractWorker implements AbstractTaskInterface {
   private sendResponse(
      success: boolean,
      message: string,
      data?: TaskResponse['data'] | undefined
   ): TaskResponse {
      return { success, message, data };
   }
   public sendSuccess(data?: Pick<TaskResponse, 'data'>): TaskResponse {
      return this.sendResponse(true, 'task completed', data);
   }
   public sendError(errorMessage: string): TaskResponse {
      return this.sendResponse(false, errorMessage);
   }
}

class TaskController extends AbstractTask {
   browser: BCInterface;

   constructor(BrowserController: BCInterface) {
      super();
      this.browser = BrowserController;
   }

   private async sleep<T>(fn: Function, ms: number): Promise<T> {
      await new Promise((resolve) => setTimeout(resolve, ms));
      this.log(`delayed for ${ms} ms`);
      return await fn();
   }

   public async doTaskFirst(): Promise<TaskResponse> {
      this.log('start first task');
      const taskName = 'task1-login';
      try {
         await this.browser.init();
         const page = await this.browser.browsePage('https://love-story.su');
         if (!page) throw Error('no page');
         await this.browser.makeScreen(page, taskName);
         await this.browser.clickOnLocator('header a.header__over');
         const formOnPage = BrowserController.page.locator('form');
         if (!formOnPage) {
            throw Error("Form doesn't exist");
         }
         await this.browser.makeScreen(BrowserController.page, taskName);
         await this.browser.tryLogin(loginFormProps, loginData);
         const makeDelayScreen = () => this.browser.makeScreen(page, taskName);
         await this.sleep(makeDelayScreen, 3000);
         this.log('Login succesfull');
         return this.sendSuccess();
      } catch (error) {
         this.log((error as Error)?.message ?? error);
         return this.sendError((error as Error)?.message ?? error);
      }
   }
}

const controller = new BrowserController(puppeteer);

const taskController = new TaskController(controller);

export { taskController, type TaskResponse };

export default TaskController;
