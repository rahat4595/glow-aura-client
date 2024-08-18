import { Outlet } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../pages/NavBar";



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet>
          


           <ToastContainer 
            position="top-right"
            autoClose={3000}
            theme="light"
            />
        </div>
    );
};

export default Root;