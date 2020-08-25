import express from "express";
import * as shopCtrl from "../controllers/shop.controller.js";

const router = express.Router();

router.route("/").get(shopCtrl.findAll);
router.route("/:id").get(shopCtrl.findShop);
router.route("/:id").delete(shopCtrl.deleteShop);

export default router;
