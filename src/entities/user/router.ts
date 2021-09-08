import { Router } from "express";
import { authenticateToken } from "../../middlewares/auth";
import { getAll, login, registration } from "./controller";

const router = Router();

router
  .get("/", authenticateToken, getAll)
  .post("/login", login)
  .post("/registration", registration);

export default router;
