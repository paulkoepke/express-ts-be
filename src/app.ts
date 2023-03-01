import dotenv from "dotenv";
import express, {Express} from "express";
import api from './api'

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use('/api/v1', api);
export default app;
