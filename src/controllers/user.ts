import { Request, Response, NextFunction } from "express";
import Logger from "../config/winston";
import Res from "../helpers/response";
import { getAllService } from "../services/user";

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllService();

    if (!users.length) {
      return Res.NotFound(res, "There are no users in DB");
    }
    Logger.info("Get all users");

    return Res.Success(res, users);
  } catch (err) {
    return next(err);
  }
};
