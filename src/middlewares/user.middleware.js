import connection from "../database/database.js";

async function validateGetUserSchema(req, res, next){
    const { authorization } = req.headers;
    let token = authorization?.replace("Bearer ", "");
    if(!authorization){
        return res.status(401).send({message: "header invalido"})
    }

    const userSession = await connection.query('SELECT * FROM "session" WHERE token = $1', [
      token,
    ]);
    if(userSession.rows.length === 0){
      res.status(404).send({message: "usuario não cadastrado"})
    }
    next();
  } 


export default validateGetUserSchema;