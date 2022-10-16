import { nanoid } from 'nanoid'
import connection from "../database/database.js";

async function ResgisterUrl(req, res){
    const { url } = req.body;
    const { authorization } = req.headers;
    let token = authorization?.replace("Bearer ", "");
    

    const userSession = await connection.query('SELECT * FROM "session" WHERE token = $1', [
        token,
      ]);
      console.log(userSession.rows[0].sessionid)
      const shortUrl = nanoid();
      
      try {
        await connection.query('INSERT INTO "url" ("shortUrl", userid, "url", "visitCount") VALUES ($1, $2, $3, $4)', [
          shortUrl,
          userSession.rows[0].sessionid,
          url,
          0
        ]);
        res.status(201).send({ shortUrl: shortUrl });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
}

export { ResgisterUrl };