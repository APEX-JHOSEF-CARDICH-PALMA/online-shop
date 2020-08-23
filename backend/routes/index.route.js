import express from "express";
import helloWorld from "./helloworld.route.js";

const router = express.Router();

router.use("/helloworld", helloWorld);

export default router;
