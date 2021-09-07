import { Router } from "express";
import { create, getAll, getById, remove, update } from "./controller";

const router = Router();

router
  .get("/", getAll)
  .get("/:id", getById)
  .post("/", create)
  .put("/:id", update)
  .delete("/:id", remove)
  .post("/login")
  .post("/registration");

export default router;
