import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Cart from "./views/Cart";
import Notification from "./views/Notification";
import { Children } from "react";
import Layout from "./layout/Layout";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import FreeZoneCompanies from "./views/FreeZoneCompanies";
import Factories from "./views/Factories";
import LocalCompanies from "./views/LocalCompanies";
import AddProduct from "./views/AddProduct";
import AddPlane from "./views/AddPlane";
import AddRealEstate from "./views/AddRealEstate";
import AddDeal from "./views/AddDeal";
import AddAds from "./views/AddAds";
import AddNews from "./views/AddNews";
import AddCar from "./views/AddCar";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
             {path: '/',element:<Navigate to='/home'/>},
             {
                path: '/home',
                element: <Home />,
                
            },{
                path: '/login',
                element: <Login />,
                
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/notification',
                element: <Notification />
            },
            {
                path: '/freezone-companies',
                element: <FreeZoneCompanies />
            },
            {
                path: '/factories',
                element: <Factories />
            },
            {
                path: '/local-companies',
                element: <LocalCompanies />
            },
            {
                path: '/freezone-companies',
                element: <FreeZoneCompanies />
            },
            {
                path: '/add-product',
                element: <AddProduct />
            },
            {
                path: '/add-car',
                element: <AddCar />
            },
            {
                path: '/add-plane',
                element: <AddPlane />
            },
            {
                path: '/add-real-estate',
                element: <AddRealEstate />
            },
            {
                path: '/add-deal',
                element: <AddDeal />
            },
            {
                path: '/add-ad',
                element: <AddAds />
            },
            {
                path: '/add-news',
                element: <AddNews />
            },
            {
                path: '*',
                element: <NotFound />
            },
            
        ]
    },
    
]);

export default router;