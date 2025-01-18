import { type Page } from 'puppeteer';

interface ITaskNames {
   login: string;
   likes: string;
}

interface TaskResponse {
   success: boolean;
   message: string;
   data?: Page | HTMLBodyElement | {};
}

interface ResponderInterface {
   sendSuccess: (props: Omit<TaskResponse, 'success'>) => void;
   sendError: (message: string) => void;
}

interface WorkerInterface {
   log: (m: string) => void;
   makeScreen: (page: Page, path?: string) => Promise<void>;
   delayFunction: <T>(fn: Function, ms: number) => Promise<T>;
}

export { ITaskNames, TaskResponse, ResponderInterface, WorkerInterface };
