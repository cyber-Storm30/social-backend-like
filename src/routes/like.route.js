import express from "express";
import LikeController from "../controllers/like.controller.js";
const router = express.Router();

router.post("/", LikeController.likePost);

export default router;
