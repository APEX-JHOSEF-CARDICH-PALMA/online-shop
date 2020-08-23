import express from "express";
import helloWorld from "./helloworld.route.js";
import roleRouter from "./role.route.js";

const router = express.Router();

router.use("/helloworld", helloWorld);
router.use("/role", roleRouter);

export default router;
