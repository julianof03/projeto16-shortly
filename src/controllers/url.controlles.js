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

async function FilterById(req, res){
    const { id } = req.params;
    try{
        const filterUrl = await connection.query(
            'SELECT id, "shortUrl", url  FROM url WHERE id = $1',
            [id]
          );
          console.log(filterUrl.rows);
          res.status(200).send(filterUrl.rows);
        } catch (error) {
          res.status(500).send({ message: error.message });
        }
}

async function VisitUrl(req, res){

}
export { ResgisterUrl, FilterById, VisitUrl };