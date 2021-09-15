const SECRET_KEY =
  "sk_test_51JZMzbDt8FXMrOxuCmiSgt33RMm5iEAy0PlilWI00KZjBocq3VgYNDNNoiGVFy4WH4p40RGymca5gRMyupWoeDxA00LX3vE0ay";
const CARD = "card_1JZz7RDt8FXMrOxu3Lhoqjrt";
const DEFAULT_CURRENCY = "usd";
const customer = "cus_KERfuk7R2IAAY8";

import Stripe from "stripe";
const stripe = new Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

export const payOrder = async (
  order_id: number,
  user_id: number,
  amount: number
) => {
  const charge = await stripe.charges.create({
    amount: 2000,
    currency: "usd",
    source: "tok_visa",
    description: "My First Test Charge TEst",
  });
  console.log(charge);
  return charge;
};
