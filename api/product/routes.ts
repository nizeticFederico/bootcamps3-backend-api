import express from "express";
import productController from "./controller";
import { authenticate } from "../../middlewares/authenticate";

const { getProducts , getProduct , createProduct, editProduct , deleteProduct , getProductsBySeller , getMyProducts } = productController;

const productRouter = express.Router();

// routes for buyers or random people in our website
productRouter.get("/" , getProducts);
productRouter.get("/:id" , getProduct);
productRouter.get("/seller/:id", getProductsBySeller);


productRouter.use(authenticate);

//routes for users with role "vendedor"
productRouter.get("/myProducts/:id" , getMyProducts);
productRouter.post("/addProduct", createProduct);
productRouter.put("/editProduct/:id", editProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);

export default productRouter;