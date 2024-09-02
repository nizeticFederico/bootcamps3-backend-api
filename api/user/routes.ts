import express from "express";
import { userController } from "./controller";
import { isAdmin } from "../../middlewares/admin";

const userRouter = express.Router();

const { getUsers, getUser, createUser, loginUser, deleteUser, editUser } = userController;


userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("/editUser/:id", editUser);

userRouter.use(isAdmin);

userRouter.get("/" , getUsers);
userRouter.get("/:id", getUser);

export default userRouter;
