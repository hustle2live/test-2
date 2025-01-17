import puppeteer, { Page } from 'puppeteer';
import BrowserController, { BCInterface } from '../services/browser.servise';
import { loginFormProps, loginData } from '../common/constants/credentials';
import {
   AbstractTaskInterface,
   AbstractWorker,
   ITaskNames,
   TaskResponse,
} from '../common/types/taskWorkers.type';
import {
   ActionSelectors,
   DataSelectors,
   TaskNames,
   URLPathSelectors,
} from '../common/constants/page.selectors';
import {
   PopupCloserProps,
   TUsersListProps,
} from '../common/types/pageData.type';

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
   private loginRetries: number = 3;
   private likesRetries: number = 5;
   private ageTreshold: number = 26;
   private taskNames: ITaskNames;

   static usersCounter: number | null = null;

   constructor(BrowserController: BCInterface) {
      super();
      this.browser = BrowserController;
      this.taskNames = TaskNames;
   }

   private async makeDelayScreenshot(
      page: Page,
      subFolder: string = '',
      ms: number = 1000
   ) {
      return await this.delayFunction(
         () => this.makeScreen(page, subFolder),
         ms
      );
   }

   public async startToLike(
      retries: number = this.likesRetries
   ): Promise<TaskResponse | void> {
      const taskName = this.taskNames.likes;
      this.log(`task 2`);
      try {
         do {
            const {
               usersLength,
               activeUserIdx,
               activeUserHTML,
            }: TUsersListProps = await this.browser.getUsersListData();

            if (TaskController.usersCounter === null) {
               TaskController.usersCounter = usersLength;
            }

            if (TaskController.usersCounter === 0) {
               const userListWasUpdated = usersLength > activeUserIdx + 1;
               if (userListWasUpdated) {
                  this.log(
                     `UserList changed from ${TaskController.usersCounter} to ${usersLength}`
                  );
                  TaskController.usersCounter =
                     usersLength - (activeUserIdx + 1);
               }
            }

            await this.browser.reactOnUser({
               userData: activeUserHTML,
               allowedAge: this.ageTreshold,
            });
            await this.makeDelayScreenshot(
               this.browser.currentPage(),
               taskName,
               2000
            );

            TaskController.usersCounter = TaskController.usersCounter - 1;
         } while (TaskController.usersCounter >= 0);

         return this.sendSuccess();
      } catch (error) {
         this.makeScreen(BrowserController.page, this.taskNames.likes);
         this.log((error as Error)?.message ?? error);
         this.log(`${taskName} - failed`);

         if (retries > 0) {
            await this.checkPopupFrame(taskName);

            this.log(`\x1b[31m Retrying to like.., still ${retries} retries`);
            this.delayFunction(
               async () => await this.startToLike(retries - 1),
               2000
            );
         } else {
            this.log('Limit of retries is riched. Task has ended.');
         }
         return this.sendError((error as Error)?.message ?? error);
      }
   }

   public async doLogin(
      retries: number = this.loginRetries
   ): Promise<TaskResponse> {
      const taskName = this.taskNames.login;
      this.log(`task 1`);
      try {
         await this.browser.init();
         const page = await this.browser.browsePage(URLPathSelectors.MAIN_URL);
         await this.makeDelayScreenshot(page, taskName);

         await page.locator(ActionSelectors.SIGN_IN_BUTTON).click();

         await this.makeDelayScreenshot(page, taskName, 2000);

         const loginResult = await this.browser.tryLogin({
            formProps: loginFormProps,
            dataProps: loginData,
         });
         this.isLoggedIn = loginResult;
         await this.makeDelayScreenshot(page, taskName, 2000);

         if (!loginResult) {
            throw new Error(`${taskName} - failed`);
         }

         await this.checkPopupFrame(taskName);
         return this.sendSuccess();
      } catch (error) {
         this.log((error as Error)?.message ?? error);

         if (retries > 0) {
            this.log('\x1b[31m Retrying to Login.., still ${retries} retries');
            await this.browser.close();
            this.delayFunction(
               async () => await this.doLogin(retries - 1),
               2000
            );
         } else {
            this.log('Limit of retries is riched. Task has ended.');
         }

         return this.sendError((error as Error)?.message ?? error);
      }
   }

   private async checkPopupFrame(
      task: ITaskNames['login'] | ITaskNames['likes']
   ): Promise<void> {
      const popupStartup: PopupCloserProps = {
         popupHeading: DataSelectors.AFTER_LOGIN_POPUP,
         popupClosers: [
            DataSelectors.AFTER_LOGIN_BUTTON_NEXT,
            DataSelectors.AFTER_LOGIN_BUTTON_CLOSE,
         ],
      };
      const popupRandom: PopupCloserProps = {
         popupHeading: DataSelectors.POPUP_RANDOM,
         popupClosers: [DataSelectors.POPUP_RANDOM_BUTTON_CLOSE],
      };

      const popupDataType: PopupCloserProps =
         task === this.taskNames.login ? popupStartup : popupRandom;

      return await this.browser.checkPopupToClose(popupDataType);
   }
}

const taskController = new TaskController(new BrowserController(puppeteer));

export { taskController, type TaskResponse };

export default TaskController;
