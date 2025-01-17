import { LaunchOptions, Locator, Page } from 'puppeteer';
import { WorkerInterface } from './taskWorkers.type';
import { LoginTypeProps } from '../constants/credentials';
import { PopupCloserProps, TUsersListProps, UserReactProps } from './pageData.type';

interface BrowserControllerInterface extends WorkerInterface {
   init(options?: LaunchOptions): Promise<void>;
   close(): Promise<void>;
   restart(): Promise<void>;
   setPage(data: Page): void;
   browsePage(link: string): Promise<Page>;
   clickTryOnLocator(tagName: string): Promise<void>;
   findElement(tagElement: string, page?: Page): Locator<Element> | null;
   tryLogin(props: LoginTypeProps): Promise<boolean>;
   checkPopupToClose(props: PopupCloserProps): Promise<void>;
   currentPage(): Page;
   getUsersListData(): Promise<TUsersListProps>;
   reactOnUser(props: UserReactProps): Promise<void>;
}

export { BrowserControllerInterface as BCInterface };
