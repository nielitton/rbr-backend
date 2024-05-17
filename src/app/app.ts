import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes/router';
import conn from './db/conn';
import errorHandler from './errors/errorHandler';

const app: Application = express();

conn();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.use(errorHandler)

export default app;
