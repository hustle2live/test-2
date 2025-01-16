import puppeteer, { Page } from 'puppeteer';
import BrowserController, { BCInterface } from './browser.servise';
import { loginFormProps, loginData } from '../common/constants/credentials';
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

   public async doTaskFirst(): Promise<TaskResponse> {
      const taskName = 'task1-login';
      this.log(`${taskName} - started...`);
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
         const loginOk = await this.browser.tryLogin({
            formProps: loginFormProps,
            dataProps: loginData,
         });

         const makeDelayScreen = () => this.browser.makeScreen(page, taskName);
         await this.delayFunction(makeDelayScreen, 1000);

         return loginOk ? this.sendSuccess() : this.sendError('login failed');
      } catch (error) {
         this.log('Login failed');
         this.log((error as Error)?.message ?? error);
         return this.sendError((error as Error)?.message ?? error);
      }
   }
}

const controller = new BrowserController(puppeteer);

const taskController = new TaskController(controller);

export { taskController, type TaskResponse };

export default TaskController;
