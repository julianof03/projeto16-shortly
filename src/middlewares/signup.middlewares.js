import joi from "joi";
import connection from "../database/database.js";

const userSchema = joi.object({
    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    password: joi.string().min(1).required(),
    confirmPassword: joi.string().min(1).required(),
  });

async function validateUserSchema(req, res, next){
    const validation = userSchema.validate(req.body, { abortEarly: false });
    if(req.body.password != req.body.confirmPassword){
        res.send({ message: "Senhas são difetentes" })
    }
    if (validation.error) {

        return res.status(400).send({ message: validation.error.message });
    }

    const { email } = req.body;
    try{
      const verifyUser =  await connection.query(`SELECT email FROM users WHERE email = $1`, [email]);
      if(verifyUser.rows[0]){
        return res.status(422).send({ message: "Email ja cadastrado" });
      }
    }catch{
      next();
    }
    next();
  } 


export default validateUserSchema;