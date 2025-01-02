import { Router } from "express";
import UserController from "../controllers/UserController";
const router = new Router();

router.post("/", UserController.create);
router.get("/", UserController.index);

export default router;
