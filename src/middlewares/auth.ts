import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config/server";
import Res from "../helpers/response";

export const generateAccessToken = (email: string) => {
  return jwt.sign(email, jwt_secret as string, {});
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

  jwt.verify(token, jwt_secret as string, (err: any, email: any) => {
    if (err) return Res.Unauthorized(res);

    next();
  });
};
