import bookshelf from "../config/bookshelf";

const TABLE_NAME = "user";

class User extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

export default User;
