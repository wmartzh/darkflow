import { Prisma } from "@prisma/client";
import client from "../database/client";

export class TagsService {

  async create(data: Prisma.TagsCreateInput){
    return client.tags.create({data});
  }
  async update(id:string , data: Prisma.TagsUpdateInput){
    return client.tags.update({where:{
      id
    },data});
  }
  async getAll(){
    return client.tags.findMany({});
  }
}

export default new TagsService();