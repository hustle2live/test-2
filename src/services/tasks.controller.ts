import puppeteer, { Page } from 'puppeteer';
import BrowserController, { BCInterface } from './browser.servise';
import { loginFormProps, loginData } from '../common/constants/credentials';
import {
   AbstractTaskInterface,
   AbstractWorker,
   TaskResponse,
} from '../common/types/task-workers.type';
import {
   ActionSelectors,
   DataSelectors,
   URLPathSelectors,
} from '../common/constants/page.selectors';
import { TUsersListProps } from '../common/types/page-data.type';

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

interface ITaskInterface {
   doLogin: () => Promise<TaskResponse>;
   startToLike: () => Promise<TaskResponse | void>;
}

class TaskController extends AbstractTask implements ITaskInterface {
   browser: BCInterface;
   isLoggedIn: boolean = false;
   static usersCount: number | null = null;

   constructor(BrowserController: BCInterface) {
      super();
      this.browser = BrowserController;
   }

   private async makeDelayScreenshot(
      page: Page,
      subFolder: string = '',
      sec: number = 1
   ) {
      return await this.delayFunction(
         () => this.makeScreen(page, subFolder),
         sec * 1000
      );
   }

   private async closeStarterPopup(): Promise<void | true> {
      if (!this.isLoggedIn) return this.log('User does not logged in');
      return await this.browser.checkStartPopup();
   }

   public async startToLike(): Promise<TaskResponse | void> {
      const taskName = 'task2-like-emitter';
      this.log(`${taskName} - started...`);
      try {
         do {
            const { length, showedIdx, innerHTML }: TUsersListProps =
               await this.browser.getUsersListData();

            console.log('users length : ' + length);
            console.log('showedIdx : ' + showedIdx);

            TaskController.usersCount = TaskController.usersCount ?? length;
            if (TaskController.usersCount === 0 && showedIdx) {
               if (length > showedIdx + 1) {
                  TaskController.usersCount = length;
               }
            }

            this.log(`DO ::: usersCount : ${TaskController.usersCount}`);

            const regexAge = /<div class="age">\d+<\/div>/gi;
            const ageString = innerHTML.match(regexAge)?.[0] ?? null;

            const age = Number(ageString?.match(/\d+/gi)?.[0] as String);
            const ageConfirmed = age >= 26;
            this.log(`--- user age = ${age}`);

            if (ageConfirmed) {
               this.browser.clickOnLocator(ActionSelectors.BUTTON_LIKE);
            } else {
               this.browser.clickOnLocator(ActionSelectors.BUTTON_DISLIKE);
            }
            await this.makeDelayScreenshot(
               this.browser.currentPage(),
               taskName,
               2
            );
            await this.delayFunction(
               () =>
                  this.log(
                     `---- profile ${ageConfirmed ? 'clicked' : 'skiped'}`
                  ),
               2000
            );
            this.log(`usersCount : ${TaskController.usersCount}`);
            if (!TaskController.usersCount) {
               this.makeDelayScreenshot(
                  this.browser.currentPage(),
                  taskName,
                  2
               );
               return this.log(`userscount falsy`);
            }

            TaskController.usersCount = TaskController.usersCount - 1;
         } while (TaskController.usersCount >= 0);

         return taskName ? this.sendSuccess() : this.sendError('login failed');
      } catch (error) {
         this.log((error as Error)?.message ?? error);
         this.log(`${taskName} - failed`);
         return this.sendError((error as Error)?.message ?? error);
      }
   }

   public async doLogin(): Promise<TaskResponse> {
      const taskName = 'task1-login';
      this.log(`${taskName} - started...`);
      try {
         await this.browser.init();
         const page = await this.browser.browsePage(URLPathSelectors.MAIN_URL);
         if (!page) {
            throw Error('no page');
         }

         await this.makeDelayScreenshot(page, taskName);
         await this.browser.clickOnLocator(ActionSelectors.SIGN_IN_BUTTON);

         if (!BrowserController.page.locator('form')) {
            throw Error("Can't find login form");
         }

         await this.makeDelayScreenshot(page, taskName);
         const loginResult = await this.browser.tryLogin({
            formProps: loginFormProps,
            dataProps: loginData,
         });

         await this.makeDelayScreenshot(page, taskName, 2);
         this.isLoggedIn = true;

         const starterPopupCheckAndClose = await this.closeStarterPopup();
         this.log('try close popup');
         if (starterPopupCheckAndClose) {
            this.log('dialog-popup closed');
            await this.makeDelayScreenshot(
               this.browser.currentPage(),
               taskName
            );
         }

         return loginResult
            ? this.sendSuccess()
            : this.sendError('login failed');
      } catch (error) {
         this.log(`${taskName} - failed`);
         this.log((error as Error)?.message ?? error);
         return this.sendError((error as Error)?.message ?? error);
      }
   }
}

const controller = new BrowserController(puppeteer);

const taskController = new TaskController(controller);

export { taskController, type TaskResponse };

export default TaskController;
