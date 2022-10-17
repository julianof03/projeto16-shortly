import connection from "../database/database.js";
import bcrypt from "bcrypt";
import dayjs from "dayjs";


async function RegisterUser(req, res){
    const { email, name, password } = req.body;
    const cripPassword = bcrypt.hashSync(password, 10);
    try{
        await connection.query('INSERT INTO users (name, email, password, "visitCount", "createdAt") VALUES ($1, $2, $3, $4, $5)', [
            name,
            email,
            cripPassword,
            0,
            dayjs().format('YYYY-MM-DD hh:mm:ss')
        ]);
          res.sendStatus(201);
    }catch (error){
        res.status(501).send({message: error.message});
    }
} 

export {RegisterUser};

