import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-500px)] max-w-screen-xl  mx-auto">
        {/* Dynamic Section */}
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
