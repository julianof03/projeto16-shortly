import connection from "../database/database.js";

async function RankingController(req, res){  
    
    try{
        const rankingList = 
        await connection.query(`SELECT 
        users.id, 
        users.name, 
        users."visitCount",
        COUNT(url.userid) AS "links"
        FROM  users
        JOIN url ON users.id = url.userid
        GROUP BY users.id
        ORDER BY "visitCount"  DESC LIMIT 10`);

        const auxArr = rankingList.rows;
        
        res.status(201).send(auxArr);
    }catch (error){
        res.status(501).send({message: error.message});
    }
}

export {RankingController};