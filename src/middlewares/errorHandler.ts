import { Request, Response, NextFunction } from "express";
import Logger from "../config/winston";

export default function (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    Logger.error(err);
    return res.status(400).json({ message: err.message });
  }
  Logger.error(err);
  return res.status(500).json({ message: "Internal error" });
}
