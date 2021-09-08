require("dotenv").config();

module.exports = {
  port: process.env.SERVER_PORT,
  jwt_secret: process.env.JWT_SECRET,
};
