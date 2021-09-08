import express from "express";
import server_config from "./src/config/server";
import { sequelize } from "./src/db/models";
import { userRouter, authRouter } from "./src/routes/";
import errorHandler from "./src/middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

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
