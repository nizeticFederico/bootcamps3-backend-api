import express from "express";
import { Request, Response } from "express";
import categoryService  from "./service";

const {getCategories , createCategory} = categoryService;


class CategoryController {

    async getCategories(req:Request , res:Response){

        try {
            const allCategories = await getCategories();
            return res.status(200).json(allCategories);
        } catch (error) {
            
        }
    }

    async createCategories(req:Request, res:Response){
        try {

            const newCategory = await createCategory(req.body);
            return res.status(200).json(newCategory);
            
        } catch (error) {
            
        }
    }
}

const categoryController = new CategoryController();

export default categoryController;