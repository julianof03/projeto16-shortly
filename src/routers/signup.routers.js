import express from "express";
import { TestRout } from "../controllers/signup.controllers.js";
import UserSchema from "../middlewares/signup.middlewares.js";


const router = express.Router();

router.post('/signup', UserSchema, TestRout);

export default router;