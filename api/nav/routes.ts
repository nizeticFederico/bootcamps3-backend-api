import express from "express";
import navController from "./controller";

const { getNav , createNav } = navController;
const navRouter = express.Router();



navRouter.get("/", getNav );
navRouter.post("/createNav", createNav);


export default navRouter;