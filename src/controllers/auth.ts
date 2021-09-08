import { NextFunction, Request, Response } from "express";
import Logger from "../config/winston";
import Res from "../helpers/response";
import { generateAccessToken } from "../middlewares/auth";
import {
  getByEmailService,
  comparePasswordService,
  createService,
} from "../services/auth";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getByEmailService(req.body.email);
    if (!user)
      return Res.NotFound(res, `User with ${req.body.email} not exists`);
    const validPassword = await comparePasswordService(
      req.body.password,
      req.body.email
    );
    if (!validPassword) {
      return Res.Forbidden(res);
    }
    const token = generateAccessToken(req.body.email);
    Logger.info(`${req.body.email}`);
    return Res.Success(res, { message: "Success", token });
  } catch (err) {
    return next(err);
  }
};

export const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const candidate = await getByEmailService(req.body.email);
    if (candidate)
      return Res.Conflict(res, `Email ${req.body.email} already exists`);
    const userInstance = req.body;

    const user = await createService(userInstance);
    const token = generateAccessToken(req.body.email);
    Logger.info(`${req.body.email}`);

    return Res.Created(res, { user, token });
  } catch (err) {
    return next(err);
  }
};
