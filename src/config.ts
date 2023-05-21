import { Application, json } from "express";
import cors from 'cors';
import morgan from "morgan";

export function configApp(app: Application) {
  app.use(json());
  app.use(morgan("tiny"));
  app.use(cors())
}
