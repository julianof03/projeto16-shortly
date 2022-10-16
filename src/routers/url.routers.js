import express from "express";
import { ResgisterUrl, FilterById, 
         VisitUrl, DeleteUrl      } from "../controllers/url.controlles.js";
import {validadeUrlSchema, validateDeleteUrlSchema } from "../middlewares/url.middlewares.js";


const router = express.Router();

router.post('/urls/shorten', validadeUrlSchema, ResgisterUrl);
router.get('/urls/:id', FilterById);
router.get('/urls/open/:shortUrl', VisitUrl);
router.delete('/urls/:id', validateDeleteUrlSchema, DeleteUrl)

export default router;