import joi from "joi";

const userSchema = joi.object({
    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    password: joi.string().min(1).required(),
    confirmPassword: joi.string().min(1).required(),
  });

function validateUserSchema(req, res, next){
    const validation = userSchema.validate(req.body, { abortEarly: false });
    if(req.body.password != req.body.confirmPassword){
        res.send({ message: "Senhas são difetentes" })
    }
    if (validation.error) {

        return res.status(400).send({ message: validation.error.message });
    }
    next();
  } 


export default validateUserSchema;