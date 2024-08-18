import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { AuthContext } from "../provider/Context";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <FadeLoader size={80} color="#36d7b7" />
       }
    
        if(user){
            return children;
        }
    
        return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;