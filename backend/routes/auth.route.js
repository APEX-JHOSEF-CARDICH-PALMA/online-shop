import express from "express";
import * as authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/login").post((req, res) => {
  authCtrl.login(req, res);
});

export default router;
