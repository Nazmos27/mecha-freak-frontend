import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/shared/ErrorPage";
import Home from "../pages/Home/HomePage";
import Cart from "../pages/Cart/Carts";
import CheckoutForm from "../pages/CheckOut/Checkout";
import Products from "../pages/Product/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckoutForm />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/products",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "details/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />,
      },
    ],
  },
]);

export default router;
