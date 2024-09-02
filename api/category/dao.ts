import mongoose from "mongoose";
import Category from "./models";
import { ICategory } from "../../types";


class CategoryDao {

    async getAllCategories(){

        try {
            const allCategories = Category.find({});
            return allCategories;
        } catch (error) {
            
        }
    }

    async createNewCategory(category:ICategory){
        try {
            const createdCategory = await Category.create(category);
            return createdCategory;
        } catch (error) {
            
        }
    }
}

const categoryDao = new CategoryDao();
export default categoryDao;
