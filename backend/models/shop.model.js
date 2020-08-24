import bookshelf from "../config/bookshelf.js";

const TABLE_NAME = "shop";

class Shop extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

export default Shop;
