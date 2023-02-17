import Sequelize from "sequelize";

export default class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blockHash: {
          type: Sequelize.STRING(66),
        },
        blockNumber: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        from: {
          type: Sequelize.STRING(66),
        },
        to: {
          type: Sequelize.STRING(66),
        },
        hash: {
          type: Sequelize.STRING(66),
        },
        nonce: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        transactionIndex: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        r: {
          type: Sequelize.STRING(66),
        },
        v: {
          type: Sequelize.STRING(66),
        },
        s: {
          type: Sequelize.STRING(66),
        },
        value: {
          type: Sequelize.STRING(66),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Transaction",
        tableName: "transaction",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Transaction.belongsTo(db.Block, {
      foreignKey: "blockId",
      targetKey: "id",
    });
  }
}
