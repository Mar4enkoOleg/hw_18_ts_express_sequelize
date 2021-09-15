"use strict";
import { Model } from "sequelize";
import { OrderAttributes } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: any) => {
  class Order extends Model<OrderAttributes> implements OrderAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    user_id!: number;
    static associate(models: any) {
      // define association here
      this.belongsTo(models.User);
      this.hasMany(models.Transaction);
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
