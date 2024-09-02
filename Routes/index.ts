import express from "express";
import userRouter from "../api/user/routes";
import productRouter from "../api/product/routes";
import categoryRouter from "../api/category/routes";
import cartRouter from "../api/cart/routes";
import ordersRouter from "../api/orders/routes";



const routes = express.Router();

routes.use("/users" , userRouter);
routes.use("/products" , productRouter);
routes.use("/categories", categoryRouter);
routes.use("/cart", cartRouter );
routes.use("/orders", ordersRouter);

export default routes;

