import connection from "../database/database.js";
import bcrypt from "bcrypt";


async function RegisterUser(req, res){
    const { email, name, password } = req.body;
    const cripPassword = bcrypt.hashSync(password, 10);
    try{
        await connection.query('INSERT INTO users (name, email, password, "visitCount") VALUES ($1, $2, $3, $4)', [
            name,
            email,
            cripPassword,
            0
          ]);
          console.log("inseri");
          res.sendStatus(201);
    }catch {
        console.log("passei reto");
        res.sendStatus(201);
    }
}

export {RegisterUser};

