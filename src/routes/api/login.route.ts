import { Router } from 'express';

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
   res.json('LoginRouter is running.. 🌈');
});
loginRouter.post('/', (req, res) => {});

export default loginRouter;
