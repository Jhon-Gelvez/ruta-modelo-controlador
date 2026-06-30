import express from "express";
import { pqrsController } from "../controllers/pqrsController.js";

const router = express.Router();

router.get("/", pqrsController.get);
router.get("/:id", pqrsController.getById);
router.post("/", pqrsController.create);
router.put("/:id", pqrsController.update);
router.delete("/:id", pqrsController.delete);

export { router };
