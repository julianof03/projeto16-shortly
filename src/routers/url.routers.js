import express from "express";
import { ResgisterUrl, FilterById, VisitUrl} from "../controllers/url.controlles.js";
import validadeUrlSchema from "../middlewares/url.middlewares.js";


const router = express.Router();

router.post('/urls/shorten', validadeUrlSchema, ResgisterUrl);
router.get('/urls/:id', FilterById);
router.get('/urls/open/:shortUrl', VisitUrl);

export default router;