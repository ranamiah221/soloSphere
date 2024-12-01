import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div className="font-lato">
            
            <Navbar></Navbar>
            
            <div className="">
            <Outlet></Outlet>
            </div>
          
           <Footer></Footer>
          
        </div>
    );
};

export default Main;