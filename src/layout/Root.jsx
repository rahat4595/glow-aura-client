import { Outlet } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet>
          <Footer></Footer>


           <ToastContainer 
            position="top-right"
            autoClose={3000}
            theme="light"
            />
        </div>
    );
};

export default Root;