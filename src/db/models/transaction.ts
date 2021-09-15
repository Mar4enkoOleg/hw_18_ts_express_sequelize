"use strict";
import { Model } from "sequelize";
import { TransactionAttributes } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: any) => {
  class Transaction
    extends Model<TransactionAttributes>
    implements TransactionAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    order_id!: number;
    object!: string;
    amount!: number;
    currency!: string;
    description?: string;
    failure_message?: string | null;
    source_id!: string;
    source_object!: string;
    source_message!: string;
    source_brand!: string;
    status!: string;
    static associate(models: any) {
      // define association here
      this.belongsTo(models.Order);
    }
  }
  Transaction.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
          model: "Order",
          key: "id",
        },
      },
      object: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      currency: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      failure_message: {
        type: DataTypes.STRING,
      },
      source_id: {
        type: DataTypes.STRING,
      },
      source_object: {
        type: DataTypes.STRING,
      },
      source_brand: {
        type: DataTypes.STRING,
      },
      source_message: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
