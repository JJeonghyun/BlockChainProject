import Sequelize from "sequelize";

export default class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        hash: {
          type: Sequelize.STRING(66),
        },
        nonce: {
          type: Sequelize.STRING(66),
        },
        number: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        parentHash: {
          type: Sequelize.STRING(66),
        },
        receiptRoot: {
          type: Sequelize.STRING(66),
        },
        size: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        time: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        transactionRoot: {
          type: Sequelize.STRING(66),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Block",
        tableName: "block",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
}
