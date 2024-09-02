import { IProduct } from "../../types";
import productDao from "./dao";
import { ISearchParams } from "./types";
import { ILogin } from "../../types";

const {
    getAllProducts,
    getProductById,
    getAllProductsBySeller,
    getAllMyProducts,
    createNewProduct,
    editProduct,
    deleteProduct
} = productDao;

class ProductService {

    async getProducts(searchParams:ISearchParams) {
    const {
            category,
            seller_id,
            filterByPrice,
            priceRange,
            page = "1",
            limit = "10",
          } = searchParams;
    
     let priceStart: number | undefined;
     let priceEnd: number | undefined;
     let sort: -1 | 1 | undefined;
    if (filterByPrice) {
      sort = filterByPrice === "lower" ? 1 : -1;
    }
    if (priceRange) {
      const [start, end] = priceRange.split(",");
      priceStart = Number(start);
      priceEnd = Number(end);
    }
        try {
            const allProducts = await getAllProducts(
                category,
                seller_id,
                priceStart,
                priceEnd,
                sort,
                page,
                limit,
            );
            return allProducts;
        } catch (error) {
            
        }
    }

    async getProduct(id: string) {
        try {
          const product = await getProductById(id);
          return product;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

    async getProductsBySeller(id:string){
      try {
        const sellerProduct = await getAllProductsBySeller(id);
        return sellerProduct;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }  

    async getMyproducts(userId:string){

      try {
        const myProducts = await getAllMyProducts(userId);
        return myProducts;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

    async createProduct(product:IProduct){

        try {
            const newProduct = await createNewProduct(product);
            return newProduct;
        } catch (error) {
            throw Error((error as Error).message);
        }

    }

    async editProduct(id: string, product: IProduct) {
        try {
          const updatedProduct = await editProduct(id, product);
          return updatedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

    async deleteProduct(id: string) {
        try {
          const deletedProduct = await deleteProduct(id);
          return deletedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      
}

const productService = new ProductService();

export default productService;