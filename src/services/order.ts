import db from "../db/models";
import { createCharge } from "./payment";

export const payOrder = async (user_id: number, amount: number) => {
  const order = await db.Order.create({ user_id });
  const charge = await createCharge(order.id, user_id, amount);
  const result = {
    order,
    charge,
  };
  console.log(result);

  return result;
};
