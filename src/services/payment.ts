import Stripe from "stripe";
import db from "../db/models";
import stripe_config from "../config/stripe";
const stripe = new Stripe(stripe_config.stripe_key!, {
  apiVersion: "2020-08-27",
});

export const createCharge = async (
  order_id: number,
  user_id: number,
  amount: number
) => {
  const user = await db.User.findByPk(user_id);

  return await stripe.charges.create({
    amount,
    currency: stripe_config.currency,
    source: "tok_visa",
    description: `User ${user.first_name}_${user.last_name} paid ${amount} for order ${order_id}`,
  });
};
