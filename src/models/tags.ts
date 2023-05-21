import Joi from "joi";

export const CreateTag = Joi.object({
  name: Joi.string().required(),
  color: Joi.string().required()
})
export const UpdateTag = Joi.object({
  name: Joi.string(),
  color: Joi.string()
})