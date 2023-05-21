import { Router } from "express";
import tagsController from "../controllers/tags.controller";

export default Router()
  .post("/", (req, res) => tagsController.create(req, res))
  .get("/", (req, res) => tagsController.getAll(req, res))
  .put("/:id",(req, res)=> tagsController.update(req,res))
  ;
