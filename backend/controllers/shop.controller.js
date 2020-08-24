import HttpStatus from "http-status-code";
import Shop from "../models/shop.model.js";

/**
 * Find all shops
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
  Shop.forge()
    .fetchAll()
    .then((shop) =>
      res.json({
        error: false,
        data: shop.toJSON(),
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}
