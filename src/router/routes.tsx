import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/shared/ErrorPage";
import Home from "../pages/Home/HomePage";


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
      
    ],
  },
  
]);

export default router;
