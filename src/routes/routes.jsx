import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../components/home/Home";
import SellerRegister from "../components/seller/SellerRegister";
import Cart from "../components/product/Cart";
import UserRegister from "../components/customer/UserRegister";
import UserLogin from "../components/customer/UserLogin";
import NumberVerification from "../components/seller/NumberVerification";
import VerificationCode from "../components/seller/VerificationCode";
import Information from "../components/seller/Information";

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
        path:"/seller/number_verification",
        element:<NumberVerification/>
    },
     {
        path:"/seller/post_number_verification",
        element:<VerificationCode/>
    },

   {
        path:"/seller/post_verification_code",
        element:<Information/>
    },
    
    
    {
     path:"/product/cart",
        element:<Cart/>
    },
    {
     path:"/customer/user_register",
        element:<UserRegister/>
    },

    {
        path: "/customer/user_login",
        element: <UserLogin />
    }
    
    

    
]);

export default router;