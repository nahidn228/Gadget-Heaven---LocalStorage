import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-2 bg-white/30 backdrop-blur-xl mt-2 rounded-xl text-white ">
      <div className="m-2 bg-[#9538E2] rounded-xl">
        <div className="navbar    ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink className="btn bg-[#9538E2]" to="/">
                  Home
                </NavLink>
                <NavLink className="btn bg-[#9538E2]" to="/statistics">
                  Statistics
                </NavLink>
                <NavLink className="btn bg-[#9538E2]" to="/dashboard">
                  Dashboard
                </NavLink>
                <NavLink className="btn bg-[#9538E2]" to="/support">
                  Support
                </NavLink>
              </ul>
            </div>
            <Link className="btn btn-ghost text-xl text-white hover:text-black bg-[#9538E2]">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4 text-lg font-medium">
              <NavLink
                className="btn border-none text-white hover:text-black bg-[#9538E2]"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="btn border-none text-white hover:text-black bg-[#9538E2]"
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className="btn border-none text-white bg-[#9538E2] hover:text-black"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className="btn  border-none text-white bg-[#9538E2] hover:text-black"
                to="/support"
              >
                Support
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <NavLink className="btn btn-ghost btn-circle text-xl">
              <div className="indicator">
                <BsCart3 />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </NavLink>
            <NavLink className="btn btn-ghost btn-circle text-xl">
              <div className="indicator">
                <FaRegHeart />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Nav text */}
        <div className="  lg:pb-40">
          <div className="flex flex-col items-center text-center w-full md:w-2/3 mx-auto space-y-6 py-12">
            <h1 className="text-5xl">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>

            <p className="text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn text-[#9538E2] text-lg">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
