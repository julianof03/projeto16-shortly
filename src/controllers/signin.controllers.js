import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

const token = uuid();

async function SigninController(req, res){
    const { password } = req.body;
    const cripPassword = bcrypt.hashSync(password, 10);
    res.send({token: cripPassword}).status(201);
}

export {SigninController};