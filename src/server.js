import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connection from "./database/database.js";
dotenv.config()

import siginupRouter from "./routers/signup.routers.js"
import SiginRouter from "./routers/signin.routers.js" 
import ShortenUrl from "./routers/url.routers.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use(SiginRouter);
app.use(siginupRouter);
app.use(ShortenUrl); 
 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});
 