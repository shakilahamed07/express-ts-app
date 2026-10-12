import { Router } from "express";
import userController from "./user.controller.js";

const router: Router = Router();

router.get("/", userController.getUser);
router.get("/:id", userController.getSingleUser);
router.post("/", userController.createUser);

const userRouter = router;

export default userRouter;

