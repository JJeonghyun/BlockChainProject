"use strict";

import Sequelize from "sequelize";
import Config from "../config/config.js";

import Block from "./block.js";
import Transaction from "./transaction.js";

const env = process.env.NODE_ENV || "development";
const config = Config[env];
const db = { Block, Transaction };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Block.init(sequelize);
Transaction.init(sequelize);
// Cart.init(sequelize);
// Order.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
export { Block, Transaction };
