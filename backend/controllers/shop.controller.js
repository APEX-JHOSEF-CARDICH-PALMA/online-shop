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

export function findShop(req, res) {
  Shop.forge({ id: req.params.id })
    .fetch()
    .then((shop) => {
      if (!shop) {
        res.status(HttpStatus.NOT_FOUND).json({
          error: true,
          data: {},
        });
      } else {
        res.json({
          error: false,
          data: shop.toJSON(),
        });
      }
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

export function deleteShop(req, res) {
  Shop.forge({ id: req.params.id })
    .fetch({ require: true })
    .then((shop) => {
      shop.attributes.active = 0;
      shop
        .save()
        .then(() =>
          res.json({
            error: false,
            data: { message: "Shop deleted successfully." },
          })
        )
        .catch((err) =>
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: true,
            data: { message: err.message },
          })
        );
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

export function createShop(req, res) {
  const { name, city, postale, street, street_number } = req.body;
  Shop.forge({ name, city, postale, street, street_number })
    .save()
    .then((shop) =>
      res.json({
        success: true,
        data: shop.toJSON(),
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

export function editShop(req, res) {
  const { id, name, city, postale, street, street_number } = req.body;
  Shop.forge({ id, name, city, postale, street, street_number })
    .save()
    .then((shop) =>
      res.json({
        success: true,
        data: shop.toJSON(),
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}
