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
import ProductUpload from "../components/seller/ProductUpload";
import AppHome from "../components/seller/home/AppHome";
import ProductList from "../components/seller/product/ProductList";
import AuthenticationLogin from "../components/admin_panel/AuthenticationLogin";
import AuthenticationRegister from "../components/admin_panel/AuthenticationRegister";

const router=createBrowserRouter([

    // Default route landing page
    {
        path: "/",
        element: <Home></Home>,
    },

// others route
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
        path:"/seller/product_upload",
        element:<ProductUpload/>
    },

 {
        path:"/seller/app_home",
        element:<AppHome/>
    },

    {
        path:"/seller/product_list",
        element:<ProductList/>
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
    },
    
   {
        path: "auth/login",
        element: <AuthenticationLogin />
    },
    {
        path: "auth/register",
        element: <AuthenticationRegister />
    },
    
    
]);

export default router;