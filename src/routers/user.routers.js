import express from "express";
import { userController } from "../controllers/user.controller.js";
import validateGetUserSchema from "../middlewares/user.middleware.js";


const router = express.Router();

router.get('/users/me', validateGetUserSchema, userController);

export default router;