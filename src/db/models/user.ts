// "use strict";
// import { Model } from "sequelize";
// import { UserAttributes } from "../../interfaces";
// export default (sequelize: any, DataTypes: any) => {
//   class User extends Model<UserAttributes> implements UserAttributes {
//     id?: number;
//     last_name!: string;
//     first_name!: string;
//     avatar?: string | null;
//     email!: string;
//     password!: string;

//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models: any) {
//       // define association here
//     }
//   }
//   User.init(
//     {
//       last_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       first_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//       },
//       avatar: {
//         type: DataTypes.STRING,
//       },
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// };

import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

import { UserAttributes } from "../../interfaces";

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  created_at?: Date;
  updated_at?: Date;
}

const User = sequelize.define<UserInstance>("User", {
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
});

export default User;
