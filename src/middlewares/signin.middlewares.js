import joi from "joi";
import connection from "../database/database.js";
import bcrypt from "bcrypt";

const loginSchema = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().min(1).required(),
  });

async function validateLoginSchema(req, res, next){
    const {email, senha} = req.body;
    const validation = loginSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      return res.status(400).send({ message: validation.error.message });
    }

    try{
      const loginUser = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
      if(loginUser.rows.length === 0){
        return res.status(404).send({message: "email incorreto ou inexistente"})
      }
      if(!bcrypt.compareSync(senha, loginUser.rows[0].password)){
        return res.status(404).send({message: "senha incorreta"})
      }
    }catch(error){
      return res.status(404).send({message: error.message})
    }

    next();
  } 


export default validateLoginSchema;