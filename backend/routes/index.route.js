import express from "express";
import roleRouter from "./role.route.js";
import userRouter from "./user.route.js";
import shopRouter from "./shop.route.js";
import authRouter from "./auth.route.js";

const router = express.Router();

router.use("/auth", authRouter);

router.use("/role", roleRouter);
router.use("/user", userRouter);
router.use("/shop", shopRouter);

export default router;
