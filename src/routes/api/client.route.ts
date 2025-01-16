import { Router } from 'express';
import { taskController, TaskResponse } from '../../services/tasks.controller';

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
