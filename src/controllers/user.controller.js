import connection from "../database/database.js";
import bcrypt from "bcrypt";


async function userController(req, res){

    const { authorization } = req.headers;
    console.log(authorization);
    if(!authorization){
        return res.status(401).send({message: "header invalido"})
    }
    let token = authorization?.replace("Bearer ", "");
    const userSession = await connection.query('SELECT * FROM "session" WHERE token = $1', [
        token,
      ]);

    try{
        const information = await connection.query(
         `SELECT 
         users.id AS "userid",
         users.name AS "name",
         users."visitCount" AS "visitas",
         url.id AS "urlid",
         url."shortUrl",
         url.url,
         url."visitCount"
         FROM users 
         JOIN url ON users.id = url.userid WHERE users.id = $1`, [12]);
          
          res.status(201).send(information.rows);
    }catch {
        console.log("passei reto");
        res.sendStatus(401);
    }
}

export {userController};
