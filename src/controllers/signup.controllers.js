
async function TestRout(req, res){
    const bo = req.body;
    console.log("cheguei na rota");
    res.send(bo).Status(201);
}

export {TestRout};

