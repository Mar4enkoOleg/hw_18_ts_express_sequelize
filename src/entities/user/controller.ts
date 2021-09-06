import { NextFunction, Request, Response } from "express";
import { UserInstance } from "../../db/models/user";
import Res from "../../helpers/response";
import { getAllService, createService, getByIdService } from "./service";

export const getById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const user = await getByIdService(id);
    if (!user) {
      return Res.BadRequest(res, `No user with id: ${id}`);
    }
    return Res.Success(res, user);
  } catch (error) {
    return Res.InternalError(res);
  }
};

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users: UserInstance[] = await getAllService();

    if (!users.length) {
      return Res.BadRequest(res, "There are no users in DB");
    }

    return Res.Success(res, users);
  } catch (error) {
    return Res.Forbidden(res);
  }
};
export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userInstance: UserInstance = req.body;

    const user = await createService(userInstance);
    return Res.Created(res, { ...user.get() });
  } catch (error: any) {
    return Res.InternalError(res, error.message);
  }
};
