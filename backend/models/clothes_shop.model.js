import bookshelf from "../config/bookshelf.js";
import Clothes from "./clothes.model.js";

const ClothesShop = bookshelf.Model.extend({
  tableName: "clothes_shop",
  clothes: function () {
    return this.belongsToMany(Clothes);
  },
});

export default ClothesShop;
