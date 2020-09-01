import express from "express";
import isAuthenticated from "../middlewares/authenticate.js";
import * as roleCtrl from "../controllers/role.controller.js";

const router = express.Router();

router.route("/").get(isAuthenticated, roleCtrl.findAll);

export default router;
