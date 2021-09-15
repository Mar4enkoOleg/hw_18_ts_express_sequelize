import { NextFunction, Request, Response } from "express";
import { payOrder } from "../services/order";

export const payment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { order_id, user_id, amount } = req.body;
    const response = await payOrder(order_id, user_id, amount);
    res.json(response);
  } catch (err) {
    return next(err);
  }
};
