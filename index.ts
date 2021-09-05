import express from "express";
import server_config from "./src/config/server";

const app = express();

app.listen(server_config.port, () => console.log("server started"));
