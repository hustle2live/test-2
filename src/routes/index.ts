import { Application } from 'express';
import clientRouter from './api/client.route';
import loginRouter from './api/login.route';

import * as middlewares from '../middleware/middlewares';

class AppRouter {
  app: Application;

  constructor(expressApp: Application) {
    this.app = expressApp;
  }

  init(): void {
    this.app.get('/', (req, res) => {
      res.send('Server is running.. 🌈');
    });
    this.app.use('/api/client',  clientRouter);
    this.app.use('/api/login',  loginRouter);
    this.app.use(middlewares.notFound);
    this.app.use(middlewares.errorHandler);
  }
}

export default AppRouter;
