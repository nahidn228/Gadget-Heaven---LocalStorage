import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import GadgetCards from "../components/GadgetCards";
import GadgetDetails from "../components/GadgetDetails";
import Wishlist from "../components/Wishlist";
import MainLayouts from "../layouts/MainLayouts";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Gadgets from "../pages/Gadgets";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("../gadget.json"),
            element: <GadgetCards></GadgetCards>,
          },
          {
            path: "/category/:category",
            loader: () => fetch("../gadget.json"),
            element: <GadgetCards></GadgetCards>,
          },
        ],
      },
      {
        path: "/statistics",
        loader: () => fetch("../gadget.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../gadget.json"),
        children: [
          {
            path: "/dashboard",
            loader: () => fetch("../gadget.json"),
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/cart",
            loader: () => fetch("../gadget.json"),
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            loader: () => fetch("../gadget.json"),
            element: <Wishlist></Wishlist>,
          },
        ],
      },

      {
        path: "/gadgets",
        loader: () => fetch("../gadget.json"),
        element: <Gadgets></Gadgets>,
      },
      {
        path: "/gadgets/:id",
        loader: () => fetch("../gadget.json"),
        element: <GadgetDetails></GadgetDetails>,
      },
    ],
  },
]);

export default router;
