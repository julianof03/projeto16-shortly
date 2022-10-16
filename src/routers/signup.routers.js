import express from "express";
import { RegisterUser } from "../controllers/signup.controllers.js";
import UserSchema from "../middlewares/signup.middlewares.js";


const router = express.Router();

router.post('/signup', UserSchema, RegisterUser);

export default router;