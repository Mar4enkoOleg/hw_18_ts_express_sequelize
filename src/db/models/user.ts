"use strict";
import { Model } from "sequelize";
import { UserAttributes } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    first_name!: string;
    last_name!: string;
    email!: string;
    avatar?: string;
    password!: string;

    static associate(models: any) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
