import { v4 as uuid } from 'uuid';
import dayjs from "dayjs";
import connection from "../database/database.js";

async function SigninController(req, res){
    const { email } = req.body;    const loginUser = await connection.query(`SELECT id FROM users WHERE email = $1`, [email]);
    const token = uuid();
    try{
            const loginUser = await connection.query(`SELECT id FROM users WHERE email = $1`, [email]);
            await connection.query('INSERT INTO session (sessionid, email, token, "createdAt") VALUES ($1, $2, $3, $4)', [
            loginUser.rows[0].id,
            email,
            token,
            dayjs().format('YYYY-MM-DD hh:mm:ss')
          ]);
          console.log("inseri");
          res.sendStatus(201);
    }catch (error){
        console.log(typeof (token))
        console.log("passei reto");
        res.status(404).send({message: error.message});
    }
}

export {SigninController};