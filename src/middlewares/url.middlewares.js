import connection from "../database/database.js";

function validadeUrlSchema(req, res, next){
    const isValidUrl = urlString => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
    }
    const { url } = req.body;
    const validation = isValidUrl(url);
    if (!validation) {
        return res.status(400).send({ message: "url invalida"});
    }
    next();
  }

  async function validateDeleteUrlSchema(req, res, next){
      const { id } = req.params;

      const { authorization } = req.headers;

      let token = authorization?.replace("Bearer ", "");


      const userSession = await connection.query('SELECT * FROM "session" WHERE token = $1', [
        token,
      ]);
      const filterUrl = await connection.query(
        'SELECT *  FROM url WHERE id = $1',
        [id]
      );
      if(!filterUrl.rows[0]){
        return res.status(404).send({message: "url não encontrada"})
      }
      console.log(filterUrl.rows[0].id)
      if (userSession.rows[0].sessionid != filterUrl.rows[0].userid) {
         return res.status(401).send({ message: "esse link não te pertence" });
      }
      next();

  }


export {validadeUrlSchema, validateDeleteUrlSchema};