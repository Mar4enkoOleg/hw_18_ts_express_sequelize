import { Request, Response } from "express";
import Res from "../../helpers/response";
import { generateAccessToken } from "../../middlewares/auth";
import {
  getAllService,
  createService,
  getByEmailService,
  comparePasswordService,
} from "./service";

export const login = async (req: Request, res: Response) => {
  try {
    const user = await getByEmailService(req.body.email);
    if (!user)
      return Res.NotFound(res, `User with ${req.body.email} not exists`);
    const validPassword = await comparePasswordService(
      req.body.password,
      req.body.email
    );
    if (!validPassword) {
      return Res.Forbidden(res);
    }
    const token = generateAccessToken(req.body.email);
    return Res.Success(res, { message: "Success", token });
  } catch (err) {
    return Res.BadRequest(res);
  }
};

export const registration = async (req: Request, res: Response) => {
  try {
    const candidate = await getByEmailService(req.body.email);
    if (candidate)
      return Res.Conflict(res, `Email ${req.body.email} already exists`);
    const userInstance = req.body;

    const user = await createService(userInstance);
    const token = generateAccessToken(req.body.email);
    return Res.Created(res, { user, token });
  } catch (err) {
    return Res.BadRequest(res);
  }
};

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
