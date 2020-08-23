import express from "express";
import roleRouter from "./role.route.js";

const router = express.Router();

router.use("/role", roleRouter);

export default router;
