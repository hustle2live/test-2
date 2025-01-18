import { LaunchOptions, Page } from 'puppeteer';
import { WorkerInterface } from './taskWorkers.type';
import { LoginTypeProps } from '../constants/credentials';
import {
   PopupCloserProps,
   TUsersListProps,
   UserReactProps,
} from './pageData.type';

type BasicBrowserService = Pick<
   IPuppeteerService,
   'init' | 'close' | 'restart'
>;

interface BCInterface extends WorkerInterface, BasicBrowserService {
   currentPage(): Page;
   browsePage(link: string): Promise<Page>;
   tryLogin(props: LoginTypeProps): Promise<boolean>;
   checkPopupToClose(props: PopupCloserProps): Promise<void>;
   getUsersListData(): Promise<TUsersListProps>;
   reactOnUser(props: UserReactProps): Promise<void>;
}

interface IUserService {
   checkUsersOrder(user: TUser): Promise<TUser[]>;
   parseUserFromHTML(html: string): Promise<TUserParsed>;
}

interface IPuppeteerService {
   init(options?: LaunchOptions): Promise<void>;
   close(): Promise<void>;
   restart(): Promise<void>;
   newPage(url: string): Promise<Page>;
   getCurrentPage(): Page;
   tryClickOnLocator(target: string): Promise<void>;
}

type TUserParsed = { age: number | null; name: string | null };

type TUser = { name: string; age: number };

export { BCInterface, IUserService, IPuppeteerService, TUserParsed, TUser };
