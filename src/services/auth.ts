import db from "../db/models/";
import { UserAttributes } from "../interfaces";
import bcrypt from "bcryptjs";

export const createService = async (userAttributes: UserAttributes) => {
  const hashedPassword = await bcrypt.hash(userAttributes.password, 10);
  userAttributes.password = hashedPassword;
  const user = await db.User.create({ ...userAttributes });
  return user;
};

export const getByEmailService = async (email: string) => {
  const user = await db.User.findOne({ where: { email } });
  return user;
};

export const comparePasswordService = async (
  password: string,
  email: string
) => {
  const user = await db.User.findOne({
    where: { email },
    attributes: ["password"],
  });
  return bcrypt.compare(password, user!.password);
};
