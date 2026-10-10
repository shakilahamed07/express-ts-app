import { Router } from "express";
import userController from "./user.controller.js";

const router: Router = Router();

router.get("/", userController.getUser);

const userRouter = router;

export default userRouter;

