import Joi from "joi"

const validator = (schema:Joi.ObjectSchema) => (payload:Joi.ValidationResult) => schema.validate(payload,{abortEarly:false})


