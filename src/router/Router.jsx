import { createBrowserRouter } from "react-router-dom";
import Form from "../components/pages/admin/products/Form";
import Table from "../components/pages/admin/products/Table";
import Sales from "../components/pages/admin/Sales";
import Cart from "../components/pages/Cart";

import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Payment from "../components/pages/Payment";
import Product from "../components/pages/Product";
import Products from "../components/pages/Products";
import Profile from "../components/pages/Profile";
import Registro from "../components/pages/Registro";
import Admin from "../components/templates/Admin";
import App from "../components/templates/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/productos",
                element: <Products />
            },
            {
                path: "/productos/:id",
                element: <Product />
            },
            {
                path: "/carrito",
                element: <Cart />
            },
            {
                path: "/pago-exitoso",
                element: <Payment />
            },
            {
                path: "/perfil",
                element: <Profile />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registro",
        element: <Registro />
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "/admin/ventas",
                element: <Sales />
            },
            {
                path: "/admin/productos",
                element: <Table />
            },
            {
                path: "/admin/productos/crear",
                element: <Form />
            },
            {
                path: "/admin/productos/editar/:id",
                element: <Form />
            },
        ]
    }
    
])

export default router;