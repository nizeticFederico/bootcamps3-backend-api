import express from "express";
import ordersController from "./controllers";
import { isAdmin } from "../../middlewares/admin";

const { getOrders , getOrdersByUserId, createOrder } = ordersController;
const ordersRouter = express.Router();


ordersRouter.get("/", getOrders);
ordersRouter.get("/:id", isAdmin , getOrdersByUserId);
ordersRouter.post("/confirmOrder", createOrder);




export default ordersRouter;