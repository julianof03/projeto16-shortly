import express from "express";
import { urlController } from "../controllers/url.controlles.js";
import validadeUrlSchema from "../middlewares/url.middlewares.js";


const router = express.Router();

router.post('/urls/shorten', validadeUrlSchema, urlController);

export default router;