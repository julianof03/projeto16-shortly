import express from 'express';
import cors from "cors";

import SiginRouter from "./routers/signin.routers.js" 

const app = express();
app.use(cors());
app.use(express.json());

app.use(SiginRouter);


app.listen(4000, () => {
    console.log('Server is listening on port 4000.');
});