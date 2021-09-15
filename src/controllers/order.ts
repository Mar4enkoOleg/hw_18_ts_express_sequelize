import { NextFunction, Request, Response } from "express";
import Res from "../helpers/response";
import { payOrder } from "../services/order";
import { writeTransactionToDatabse } from "../services/transaction";

export const payment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id, amount } = req.body;
    const response = await payOrder(user_id, amount);
    await writeTransactionToDatabse(response);
    return Res.Success(res, response);
  } catch (err) {
    return next(err);
  }
};
