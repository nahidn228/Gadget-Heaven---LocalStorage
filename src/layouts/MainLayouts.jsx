import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const MainLayouts = () => {
  useEffect(() => {
    // ..
    AOS.init();
  }, []);

  return (
    <div >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Gadget Heaven Accessories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>

      <div className="min-h-100vh max-w-screen-xl  mx-auto">
        {/* Dynamic Section */}
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
