import express from "express";
import isAuthenticated from "../middlewares/authenticate.js";
import * as shopCtrl from "../controllers/shop.controller.js";

const router = express.Router();

router.route("/").get(shopCtrl.findAll);
router.route("/:id").get(shopCtrl.findShop);
router.route("/:id").delete(isAuthenticated, shopCtrl.deleteShop);
router.route("/").post(isAuthenticated, shopCtrl.createShop);
router.route("/").put(isAuthenticated, shopCtrl.editShop);
router.route("/city/:name").get(shopCtrl.findInCity);
router.route("/clothing/:clothId").get(shopCtrl.findAllByClothing);

export default router;
