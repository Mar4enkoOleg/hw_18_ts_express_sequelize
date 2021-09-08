import { Router } from "express";
import { authenticateToken } from "../middlewares/auth";
import { getAll } from "../controllers/user";

const router = Router();

router.get("/", authenticateToken, getAll);

export default router;
