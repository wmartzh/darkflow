import { Request, Response } from "express"
import { BaseController } from "../types/base.controller"
import { CreateTag, UpdateTag } from "../models/tags";
import { Prisma } from "@prisma/client";
import tagsService from "../services/tags.service";

export class TagsController extends BaseController{
  async create(req: Request, res: Response){
    try {
      const body = (await CreateTag.validateAsync(
        req.body
      )) satisfies Prisma.TagsCreateInput;
      
      this.responseHandler(res, await tagsService.create(body),200)
    } catch (error) {

    console.log('◉ ▶ file: tags.controller.ts:17 ▶ TagsController ▶ create ▶ error:', error);

      console.log('◉ ▶ file: tags.controller.ts:17 ▶ TagsController ▶ create ▶ error:', JSON.stringify(error,null,2));
      this.errorHandler(res, error);
    }
  }
  async update(req: Request, res: Response){
    try {
      const id = req.params.id
      const body = (await UpdateTag.validateAsync(
        req.body
      )) satisfies Prisma.TagsUpdateInput;
      
      this.responseHandler(res, await tagsService.update(id, body),200)
    } catch (error) {

    console.log('◉ ▶ file: tags.controller.ts:17 ▶ TagsController ▶ create ▶ error:', error);

      console.log('◉ ▶ file: tags.controller.ts:17 ▶ TagsController ▶ create ▶ error:', JSON.stringify(error,null,2));
      this.errorHandler(res, error);
    }
  }
  async getAll(req: Request, res: Response){
    try {
  
      this.responseHandler(res, await tagsService.getAll(),200)
    } catch (error) {

    console.log('◉ ▶ file: tags.controller.ts:17 ▶ TagsController ▶ create ▶ error:', error);

      console.log('◉ ▶ file: tags.controller.ts:17 ▶ TagsController ▶ create ▶ error:', JSON.stringify(error,null,2));
      this.errorHandler(res, error);
    }
  }


}

export default new TagsController()