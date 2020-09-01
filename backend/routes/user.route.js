import express from "express";
import isAuthenticated from "../middlewares/authenticate.js";
import * as userCtrl from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(isAuthenticated, userCtrl.findAll);
router.route("/:id").get(userCtrl.findUser);
router.route("/").post(userCtrl.createUser);
router.route("/:id").delete(isAuthenticated, userCtrl.deleteUser);
router.route("/").put(isAuthenticated, userCtrl.editUser);

export default router;
