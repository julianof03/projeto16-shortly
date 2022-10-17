import { nanoid } from 'nanoid'
import connection from "../database/database.js";

async function ResgisterUrl(req, res) {
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

async function FilterById(req, res) {
  const { id } = req.params;
  try {
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

async function VisitUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const filterUrl = await connection.query(
      'SELECT * FROM url WHERE "shortUrl" = $1', [
      shortUrl,
    ]);
    const changeUser = await connection.query(
      'SELECT * FROM users WHERE id = $1', [
      filterUrl.rows[0].userid
    ]);
    const newvistnumber = filterUrl.rows[0].visitCount + 1;
    const newuservistnumber = changeUser.rows[0].visitCount + 1;
    const increaseUserVists = await connection.query('UPDATE users SET "visitCount" = $1 WHERE id = $2', [
      newuservistnumber,
      filterUrl.rows[0].userid,
    ]);
    const increaseVists = await connection.query('UPDATE url SET "visitCount" = $1 WHERE "shortUrl" = $2', [
      newvistnumber,
      shortUrl,
    ]);
    console.log(filterUrl.rows[0].id)
    res.redirect(`/urls/${filterUrl.rows[0].id}`)
  } catch (error) {
    res.status(404).send({ message: "url não encontrado" });
  }

}

async function DeleteUrl(req, res) {
  const { id } = req.params;
  console.log(id);
  res.sendStatus(201);
  try {
    await connection.query("DELETE FROM url WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
} 
export { ResgisterUrl, FilterById, VisitUrl, DeleteUrl };