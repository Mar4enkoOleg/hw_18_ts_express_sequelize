require("dotenv").config();

module.exports = {
  stripe_key: process.env.STRIPE_SECRET_KEY,
  currency: "usd",
};
