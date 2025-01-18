import { Router } from 'express';
import {
   TaskController,
   TaskResponse,
} from '../../controllers/tasks.controller';
import { userService } from '../../services/user.service';
import { puppeteerService } from '../../services/puppeteer.service';
import BrowserController from '../../services/browser.service';

const controller = new BrowserController(puppeteerService, userService);
const taskController = new TaskController(controller);

const clientRouter = Router();

clientRouter.get('/', async (req, res) => {
   try {
      const login: TaskResponse = await taskController.doLogin();

      if (!login || !login.success) {
         throw Error(login.message);
      }

      const likeConfirmed = await taskController.startToLike();

      if (!likeConfirmed || !likeConfirmed.success) {
         throw Error(likeConfirmed?.message);
      }

      res.status(200).json({
         data: likeConfirmed.data,
         message: 'ClientRouter is running.. 🌈',
      });
   } catch (error) {
      res.status(501).json({
         error: true,
         message: (error as Error)?.message ?? error,
      });
   }
});

clientRouter.post('/', (req, res) => {});

export default clientRouter;
