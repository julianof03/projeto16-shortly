import joi from "joi";

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(1).required(),
  });

function validateLoginSchema(req, res, next){
    const validation = loginSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        return res.status(400).send({ message: validation.error.message });
    }
    next();
  } 


export default validateLoginSchema;