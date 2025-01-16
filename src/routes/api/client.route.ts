import { Router } from 'express';
import { taskController, TaskResponse } from '../../services/tasks.controller';

const clientRouter = Router();

clientRouter.get('/', async (req, res) => {
   try {
      const result: TaskResponse = await taskController.doTaskFirst();

      if (!result || !result.success) {
         throw Error(result.message);
      }

      res.status(200).json({
         data: result,
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
