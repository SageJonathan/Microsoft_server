import express from "express";
import * as landingController from "../controllers/landing-controllers.js";

const router = express.Router();

router.route("/testimonials")
  .get(landingController.testimonials);

export default router;  