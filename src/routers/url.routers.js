import express from "express";
import { ResgisterUrl, FilterById } from "../controllers/url.controlles.js";
import validadeUrlSchema from "../middlewares/url.middlewares.js";


const router = express.Router();

router.post('/urls/shorten', validadeUrlSchema, ResgisterUrl);
router.get('/urls/:id', FilterById);

export default router;