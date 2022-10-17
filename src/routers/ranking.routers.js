import express from "express";
import { RankingController } from "../controllers/ranking.controllers.js";

const router = express.Router();

router.get('/ranking', RankingController);

export default router;
