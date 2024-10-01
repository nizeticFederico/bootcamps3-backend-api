import navDao from "./dao";
import { INav } from "../../types";

const {getAllNavs , createNewNav} = navDao;

class NavService {
        
    async getNav(){
        try {
            const getNav = await getAllNavs();
            return getNav;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async createNav(nav:INav){
        try {
            const createNav = await createNewNav(nav);
            return createNav;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }


}


const navService = new NavService();

export default navService;