import { Request, Response } from "express";
import { UserInstance } from "../../db/models/user";
import Res from "../../helpers/response";
import {
  getAllService,
  createService,
  getByIdService,
  updateService,
  deleteService,
} from "./service";

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

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const candidate = await getByIdService(id);
    if (!candidate) {
      return Res.BadRequest(res, `No user with id: ${id}`);
    }
    const userAttributes = req.body;
    await updateService(id, userAttributes);
    return Res.Success(res, { message: `Updated` });
  } catch (error: any) {
    return Res.InternalError(res, error.message);
  }
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const candidate = await getByIdService(id);
    if (!candidate) {
      return Res.BadRequest(res, `No user with id: ${id}`);
    }
    await deleteService(id);
    return Res.Deleted(res, { message: "Deleted" });
  } catch (error: any) {
    return Res.InternalError(res, error.message);
  }
};
