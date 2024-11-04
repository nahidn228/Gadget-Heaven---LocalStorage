import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Dashboard from "../pages/Dashboard";
import Gadgets from "../pages/Gadgets";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import GadgetCards from "../components/GadgetCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children:[
            {
                path:'/',
                loader: () => fetch("../gadget.json"),
                element: <GadgetCards></GadgetCards>
            }
        ]
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
