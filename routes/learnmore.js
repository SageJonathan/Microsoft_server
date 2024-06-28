
import express from "express";
import * as learnmoreController from "../controllers/learnmore-controllers.js";

const router = express.Router();

router.route("/prompt")
  .post(learnmoreController.prompt1);

export default router;