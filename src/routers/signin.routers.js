import express from "express";
import { TestRout } from "../controllers/signin.controllers.js";

const router = express.Router();

router.get('/signin', TestRout);

export default router;