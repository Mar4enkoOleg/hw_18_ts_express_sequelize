import { Router } from "express";
import { login, registration } from "../controllers/auth";

const router = Router();

router.post("/login", login).post("/registration", registration);

export default router;
