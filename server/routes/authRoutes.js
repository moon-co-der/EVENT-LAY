import express from "express";
import * as authController from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
.route("/register")
.post(authController.registerUser);

router
.route("/register/:role")
.post(authController.registerUser);

router
.route("/login")
.post(authController.loginUser);

router
.route("/me")
.get(protect, authController.getMe);

export default router;
