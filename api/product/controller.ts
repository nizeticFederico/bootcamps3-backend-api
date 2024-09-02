import { Request , Response } from "express";
import productService from "./service";
import { ISearchParams } from "./types";
import { ILogin } from "../../types";

const {
    getProducts,
    getProduct,
    getProductsBySeller,
    getMyproducts,
    createProduct,
    editProduct,
    deleteProduct
} = productService;

class ProductController {

    async getProducts(req:Request , res:Response) {
        const searchParams: ISearchParams = req.query;

        try {
            const allProducts = await getProducts(searchParams);
            return res.status(200).json(allProducts);
        } catch (error) {
            return res.status(400).json({ error });
        }

    }

    async getProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
          const product = await getProduct(id);
          return res.status(200).json(product);
        } catch (error) {
          return res.status(400).json({ error });
        }
      }

    async getProductsBySeller(req:Request , res:Response){
        const {id} = req.params;
        try {
          const sellerProduct = await getProductsBySeller(id);
          return res.status(200).json(sellerProduct);
        } catch (error) {
          return res.status(400).json({ error });
        }
    }

    async getMyProducts(req:Request , res:Response){
      const {id} = req.params

      try {
        const myProducts = await getMyproducts(id);
        res.status(200).json(myProducts);
      } catch (error) {
        return res.status(400).json({ error });
      }
    }

    async createProduct(req:Request , res:Response){

        try {
            const newProduct = await createProduct(req.body);
            return res.status(200).json(newProduct);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async editProduct(req: Request, res: Response) {
        const { id } = req.params;
        const editedProductBody = req.body;
        try {
          const editedProduct = await editProduct(id, editedProductBody);
          return res.status(200).json(editedProduct);
        } catch (error) {
          return res.status(400).json({ error });
        }
      }

    async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
          const deletedProduct = await deleteProduct(id);
          return res.status(200).json(deletedProduct);
        } catch (error) {
          return res.status(400).json({ error });
        }
      }
}

const productController = new ProductController();

export default productController;