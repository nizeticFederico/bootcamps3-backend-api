import express from "express";
import { cartController } from "./controller";
import { authenticate } from "../../middlewares/authenticate";


const {getCarts , addCart , addProductToCart } = cartController;
const cartRouter = express.Router();

cartRouter.use(authenticate)

cartRouter.get("/" , getCarts);
cartRouter.post("/add", addCart );
cartRouter.post("/addProductToCart", addProductToCart);

export default cartRouter;