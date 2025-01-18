import { Page } from 'puppeteer';

import { loginFormProps, loginData } from '../common/constants/credentials';
import { ITaskNames, TaskResponse } from '../common/types/taskWorkers.type';
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
import { AbstractResponder } from './abstract.controller';
import { BCInterface } from '../common/types/browserController.type';

interface TasksInterface {
   doLogin: () => Promise<TaskResponse>;
   startToLike: () => Promise<TaskResponse | void>;
}

class TaskController extends AbstractResponder implements TasksInterface {
   browser: BCInterface;
   isLoggedIn: boolean = false;
   private loginRetries: number = 3;
   private likesRetries: number = 5;
   private ageTreshold: number = 26;
   private taskNames: ITaskNames;

   static usersCounter: number | null = null;

   constructor(controller: BCInterface) {
      super();
      this.browser = controller;
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

            await this.makeScreen(this.browser.currentPage(), taskName);
            await this.browser.reactOnUser({
               userData: activeUserHTML,
               allowedAge: this.ageTreshold,
            });

            TaskController.usersCounter = TaskController.usersCounter - 1;
         } while (TaskController.usersCounter >= 0);

         return this.sendSuccess();
      } catch (error) {
         this.makeScreen(this.browser.currentPage(), taskName);
         this.log(this.handleError(error));

         if (retries > 0) {
            await this.checkPopupFrame(taskName);
            this.log(
               `\x1b[31m Retrying to like.., \x1b[30m still ${retries} retries`
            );
            this.delayFunction(
               async () => await this.startToLike(retries - 1),
               2000
            );
         } else {
            this.log(`\x1b[31m ${taskName} - failed \x1b[30m `);
            this.log('\x1b[33m Limit of retries is riched. Task ended.');
         }
         return this.sendError(this.handleError(error));
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

         const signIn = await page.waitForSelector(
            ActionSelectors.SIGN_IN_BUTTON
         );

         await signIn?.click();

         await this.makeDelayScreenshot(page, taskName, 2000);

         const loginResult = await this.browser.tryLogin({
            formProps: loginFormProps,
            dataProps: loginData,
         });
         this.isLoggedIn = loginResult;

         await this.checkPopupFrame(taskName);
         return this.sendSuccess();
      } catch (error) {
         this.log(this.handleError(error));
         await this.makeScreen(this.browser.currentPage(), taskName);

         if (retries > 0) {
            this.log(
               `\x1b[31m Retrying to Login.., \x1b[30m still ${retries} retries`
            );
            await this.browser.close();
            this.delayFunction(
               async () => await this.doLogin(retries - 1),
               2000
            );
         } else {
            this.log('\x1b[33m Limit of retries is riched. Task ended.');
         }

         return this.sendError(this.handleError(error));
      }
   }

   private handleError(error: unknown): string {
      return error instanceof Error ? error.message : String(error);
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

export { TaskController, type TaskResponse };
