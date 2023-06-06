import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Serect from "../pages/Shared/Secret/Serect";
import PrivateRoute from "./PrivateRoute";
import DeshBorad from "../Layout/DeshBorad";
import MyCart from "../pages/DeshBoard/Mycart/MyCart";
import AllUser from "../pages/DeshBoard/Mycart/AllUser";
import AddItem from "../pages/DeshBoard/Mycart/AddItem/AddItem";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Serect></Serect></PrivateRoute>
            }
        ],


    },

    {
        path: 'deshboard',
        element: <PrivateRoute><DeshBorad></DeshBorad></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUser></AllUser>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            }
        ]
    }
]);

