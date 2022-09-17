import express from 'express';
import 'express-async-errors';
import carsRoute from './routes/carsRoute';
import motoRoute from './routes/motoRoute';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());
app.use(carsRoute);
app.use(motoRoute);

app.use(errorHandler);

export default app;
