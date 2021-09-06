import { Router } from "express";
import { create, getAll, getById } from "./controller";

const router = Router();

router
  .get("/", getAll)
  .get("/:id", getById)
  .post("/", create)
  .put("/:id")
  .delete("/:id");

export default router;
