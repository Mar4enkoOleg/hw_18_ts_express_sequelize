import db from "../db/models/";
import { UserAttributes } from "../interfaces";
import bcrypt from "bcryptjs";

export const getByIdService = async (id: number) => {
  const user = await db.User.findOne({ where: { id } });
  return user;
};

export const getAllService = async () => {
  const users = await db.User.findAll({
    attributes: [
      "first_name",
      "last_name",
      "avatar",
      "email",
      "created_at",
      "updated_at",
      "password",
    ],
  });
  return users;
};

export const createService = async (userAttributes: UserAttributes) => {
  const hashedPassword = await bcrypt.hash(userAttributes.password, 10);
  userAttributes.password = hashedPassword;
  const user = await db.User.create({ ...userAttributes });
  return user;
};

export const updateService = async (
  id: number,
  userAttributes: UserAttributes
) => {
  const user = await db.User.update({ ...userAttributes }, { where: { id } });
  return user;
};

export const deleteService = async (id: number) => {
  const user = await db.User.destroy({ where: { id } });
  return user;
};
