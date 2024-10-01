import Nav from "./model";
import { INav } from "../../types";

class NavDao{

    async getAllNavs() {

        try{
            const getNav = await Nav.find({})
            return getNav;
        } catch(error) {
            throw Error((error as Error).message);
        }

    };

    async createNewNav(nav:INav){
        try {
            const newNav = await Nav.create(nav);
            return newNav;
        } catch (error) {
            throw new Error("Invalid cart model");
        }
    }

}


const navDao = new NavDao();

export default navDao;