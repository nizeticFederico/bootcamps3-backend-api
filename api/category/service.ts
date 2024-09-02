import categoryDao from "./dao";
import { ICategory } from "../../types";

const {getAllCategories , createNewCategory} = categoryDao;

class CategoryService {


    async getCategories(){

        try {
            const allCategories = await getAllCategories();
            return allCategories;
        } catch (error) {
            
        }
    }

    async createCategory(category:ICategory) {

        try {
            const newCategory = await createNewCategory(category);
            return newCategory;
        } catch (error) {
            
        }
    }
}

const categoryService = new CategoryService();
export default categoryService;