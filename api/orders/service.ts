import ordersDao from "./dao";
import { IOrder } from "../../types";
import productDao from "../product/dao";

const {getAllOrders, getOrdersByUserId, createOrder} = ordersDao;
const {getProductById , editProduct} = productDao;

class OrdersService {

    async getOrders(){

        try {
            const orders = await getAllOrders();
            return orders;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async getOrdersByUserId(id:string){

        try {
            const orders = await getOrdersByUserId(id);
            return orders;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async createNewOrder(order:IOrder){
        const {products} = order;
        try {
            const newOrder = await createOrder(order);

            products.forEach( async (product) => {
                const existingProduct = await getProductById(product.product_id);
                if (!existingProduct) {
                    throw Error('Invalid product ID');
                } 

                await editProduct(product.product_id , {
                    stock: existingProduct.stock! - product.quantity
                }); 
            });
            return newOrder;
        } catch (error) {
            throw Error((error as Error).message);
        }
        }
    }



const ordersService = new OrdersService();

export default ordersService;