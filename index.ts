import express from "express";
import server_config from "./src/config/server";
import { sequelize } from "./src/db/models";
import userRouter from "./src/entities/user/router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);

const start = async () => {
  try {
    sequelize.authenticate().then(() => {
      app.listen(server_config.port, () => console.log("server started"));
    });
  } catch (error) {
    console.error(error);
  }
};

start();
