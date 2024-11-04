import { createBrowserRouter } from "react-router-dom";
import GadgetCards from "../components/GadgetCards";
import MainLayouts from "../layouts/MainLayouts";
import Dashboard from "../pages/Dashboard";
import Gadgets from "../pages/Gadgets";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";

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
      },
      {
        path: "/gadgets",
        element: <Gadgets></Gadgets>,
      },
    ],
  },
]);

export default router;
