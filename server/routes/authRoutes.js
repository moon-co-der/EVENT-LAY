import express from "express"
import {registerUser} from "../routes/authRoutes"

const router= express.Router();

router.post("/register", registerUser);

export default router;
