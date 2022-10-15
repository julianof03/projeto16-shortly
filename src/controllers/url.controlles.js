import { nanoid } from 'nanoid'

async function urlController(req, res){
    const { url } = req.body;
    const { authorization } = req.headers;
    let token = authorization?.replace("Bearer ", "");
    

    const shortUrl = nanoid()
    console.log(shortUrl);
    res.send({ "shortUrl": shortUrl }); 
}

export { urlController };