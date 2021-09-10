import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config/server";
import Logger from "../config/winston";
import Res from "../helpers/response";

export const generateAccessToken = (email: string) => {
  const payload = { email: email };
  return jwt.sign(payload, jwt_secret as string, { expiresIn: "1h" });
};

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return Res.Unauthorized(res);
  }

  jwt.verify(token, jwt_secret as string, (err: any, user: any) => {
    if (err) return Res.Unauthorized(res);
    Logger.info(`User: ${user.email}`);

    next();
  });
};
