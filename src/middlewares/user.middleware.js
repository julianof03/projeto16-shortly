

async function validateGetUserSchema(req, res, next){
    const { authorization } = req.headers;
    console.log(authorization); 
    if(!authorization){
        return res.status(401).send({message: "header invalido"})
    }
    next();
  } 


export default validateGetUserSchema;