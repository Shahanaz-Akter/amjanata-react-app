import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../components/home/home";
import SellerRegister from "../components/seller/sellerRegister";
import Cart from "../components/product/cart";
import UserRegister from "../components/customer/user_register";

const router=createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/home",
        element: <Home></Home>,
    },
    {
        path:"/seller/seller_register",
        element:<SellerRegister/>
    },
    {
     path:"/product/cart",
        element:<Cart/>
    },
    {
     path:"/customer/user_register",
        element:<UserRegister/>
    }
    
    

    
]);

export default router;