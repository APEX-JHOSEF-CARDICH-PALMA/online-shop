import express from "express";
import * as shopCtrl from "../controllers/shop.controller.js";

const router = express.Router();

router.route("/").get(shopCtrl.findAll);
router.route("/:id").get(shopCtrl.findShop);
router.route("/:id").delete(shopCtrl.deleteShop);
router.route("/").post(shopCtrl.createShop);
router.route("/").put(shopCtrl.editShop);
router.route("/city/:name").get(shopCtrl.findInCity);

export default router;
