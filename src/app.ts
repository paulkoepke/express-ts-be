import dotenv from "dotenv";
import express, {Express} from "express";

dotenv.config();

const app: Express = express();

app.use(express.json());
export default app;