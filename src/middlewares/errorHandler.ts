import { Request, Response, NextFunction } from "express";

export default function (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(500).json({ message: "Internal error" });
}
