import { Response } from "express";
import { httpCode } from "../enums";

class Res {
  static Success<D>(res: Response, data: D): Response {
    return res.status(httpCode.OK).json({
      data,
    });
  }
  static Deleted<D>(res: Response, data: D): Response {
    return res.status(httpCode.OK).json({
      data,
    });
  }

  static Created<D>(res: Response, data: D): Response {
    return res.status(httpCode.CREATED).json({
      data,
    });
  }

  static BadRequest(res: Response, message = "Bad Request"): Response {
    return res.status(httpCode.BAD_REQUEST).json({
      message,
    });
  }

  static Unauthorized(res: Response, message = "Unauthorized"): Response {
    return res.status(httpCode.UNAUTHORIZED).json({
      message,
    });
  }

  static Forbidden(res: Response): Response {
    return res.status(httpCode.FORBIDDEN).json({
      message: "Forbidden",
    });
  }

  static Conflict(res: Response, message: string): Response {
    return res.status(httpCode.CONFLICT).json({
      message,
    });
  }

  static InternalError(res: Response, message = "Internal ..."): Response {
    return res.status(httpCode.INTERNAL_SERVER_ERROR).json({
      message,
    });
  }
  static NotFound(res: Response, message = "Resourse not found"): Response {
    return res.status(httpCode.NOT_FOUND).json({
      message,
    });
  }
}

export default Res;
