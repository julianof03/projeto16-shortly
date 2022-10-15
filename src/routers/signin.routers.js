import express from "express";
import { SigninController } from "../controllers/signin.controllers.js";
import signinSchema from "../middlewares/signin.middlewares.js";

const router = express.Router();

router.post('/signin', signinSchema, SigninController);

export default router;