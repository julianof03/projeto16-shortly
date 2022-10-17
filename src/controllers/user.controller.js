import connection from "../database/database.js";


async function userController(req, res){
    const { authorization } = req.headers;
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
                JOIN url ON users.id = url.userid WHERE users.id = $1`, [userSession.rows[0].sessionid]);

        const auxarr = information.rows
        const newarr = {
            "id": information.rows[0].userid,
            "name": information.rows[0].name,
            "visitCount": information.rows[0].visitCount,
            "shortenedUrls": auxarr.map((auxarr)=> {return({
                "id": auxarr.urlid,
                "shortUrl": auxarr.shortUrl,
                "url": auxarr.url,
                "visitCount": auxarr.visitCount
            })})
        }

        res.status(200).send(newarr);
    }catch (error){
        res.status(401).send({message: error.message});
    }
}

export {userController};
