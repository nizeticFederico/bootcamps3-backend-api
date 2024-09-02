import express from "express";
import categoryController from "./controller";
import { isAdmin } from "../../middlewares/admin";

const {getCategories, createCategories} = categoryController;


const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/createCategory" , isAdmin ,  createCategories);


export default categoryRouter;