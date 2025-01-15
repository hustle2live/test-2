import { Router } from 'express';

const clientRouter = Router();

clientRouter.get('/', (req, res) => {
   res.json('ClientRouter is running.. 🌈');
});

clientRouter.post('/', (req, res) => {});

export default clientRouter;
