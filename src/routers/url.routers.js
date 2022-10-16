import express from "express";
import { ResgisterUrl } from "../controllers/url.controlles.js";
import validadeUrlSchema from "../middlewares/url.middlewares.js";


const router = express.Router();

router.post('/urls/shorten', validadeUrlSchema, ResgisterUrl);

export default router;