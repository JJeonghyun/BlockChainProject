import Sequelize from "sequelize";

export default class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        hash: {
          type: Sequelize.STRING(66),
          allowNull: false,
        },
        nonce: {
          type: Sequelize.STRING(66),
        },
        number: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
        },
        parentHash: {
          type: Sequelize.STRING(66),
        },
        size: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        time: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        transactionsRoot: {
          type: Sequelize.STRING(66),
        },
        gasUsed: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        gasLimit: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        txs: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        difficulty: {
          type: Sequelize.STRING(255),
        },
        miner: {
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

  static associate(db) {
    db.Block.hasMany(db.Transaction, {
      foreignKey: "blockHeight",
      sourceKey: "number",
    });
  }
}
