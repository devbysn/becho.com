import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
} from "../controllers/registerController.js";

const router = express.Router();

// Register || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", testController);

export default router;
