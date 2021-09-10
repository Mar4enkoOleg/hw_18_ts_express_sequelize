import morgan, { StreamOptions } from "morgan";

import Logger from "../config/winston";

const stream: StreamOptions = {
  write: (message) => {
    Logger.http(message);
  },
};

const skip = () => {
  // const env = process.env.NODE_ENV || "development";
  // console.log(env !== "development");

  return false;
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
