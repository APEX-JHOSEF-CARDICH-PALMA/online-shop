import bookshelf from "../config/bookshelf.js";
import ClothesShop from "./clothes_shop.model.js";

const Shop = bookshelf.Model.extend({
  tableName: "shop",
  clothesShop: function () {
    return this.hasMany(ClothesShop);
  },
});

export default Shop;
