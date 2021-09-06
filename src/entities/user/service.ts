import User from "../../db/models/user";
import { UserAttributes } from "../../interfaces";

export const getByIdService = async (id: number) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

export const getAllService = async () => {
  const users = await User.findAll();
  return users;
};

export const createService = async (userAttributes: UserAttributes) => {
  const user = await User.create({ ...userAttributes });
  return user;
};
