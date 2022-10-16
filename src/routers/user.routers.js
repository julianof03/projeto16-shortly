import express from "express";
import { userController } from "../controllers/user.controller.js";
import UserSchema from "../middlewares/signup.middlewares.js";


const router = express.Router();

router.get('/users/me', userController);

export default router;