import { createBrowserRouter } from "react-router-dom";
import GadgetCards from "../components/GadgetCards";
import GadgetDetails from "../components/GadgetDetails";
import MainLayouts from "../layouts/MainLayouts";
import Dashboard from "../pages/Dashboard";
import Gadgets from "../pages/Gadgets";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
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
            path: "/dashboard/:id",
            loader: () => fetch("../gadget.json"),
            element: <Cart></Cart>,
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
