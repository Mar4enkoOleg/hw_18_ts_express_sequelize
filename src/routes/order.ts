import { Router } from "express";
import { payment } from "../controllers/order";

const router = Router();

router.post("/", payment);

export default router;
