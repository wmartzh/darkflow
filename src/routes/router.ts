import { Application } from "express";
import exampleRouter from "./example";
import tags from "./tags";
export default function router(app: Application): void {
  /**
   * Every source are specifed here
   */
  app.use("/", exampleRouter);
  app.use("/tags",tags);
}
