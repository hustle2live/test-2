import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import AppRouter from './routes';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

const router = new AppRouter(app);
router.init();

export default app;
