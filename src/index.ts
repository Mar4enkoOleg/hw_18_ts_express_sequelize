import express from "express";
import server_config from "./config/server";
import db from "./db/models";
import { userRouter, authRouter } from "./routes";
import errorHandler from "./middlewares/errorHandler";
import morgan from "./middlewares/morgan";

const app = express();

app.use(morgan);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

const start = async () => {
  try {
    db.sequelize.authenticate().then(() => {
      app.listen(server_config.port, () => console.log("server started"));
    });
  } catch (error) {
    console.error(error);
  }
};

start();
