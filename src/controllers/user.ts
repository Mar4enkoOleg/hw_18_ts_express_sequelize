import { Request, Response } from "express";
import Res from "../helpers/response";
import { getAllService } from "../services/user";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await getAllService();

    if (!users.length) {
      return Res.NotFound(res, "There are no users in DB");
    }

    return Res.Success(res, users);
  } catch (error) {
    return Res.BadRequest(res);
  }
};
