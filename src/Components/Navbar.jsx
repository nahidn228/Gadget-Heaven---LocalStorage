import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getAllCart } from "../utility";
import { getAllWish } from "../utility/wishlist";

const Navbar = () => {
  const { pathname } = useLocation();
  const carts = getAllCart();
  const wishlist = getAllWish();

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn border-none hover:text-black ${
            isActive
              ? "bg-white text-[#9538E2] border-2 border-[#9538E2]"
              : "bg-[#9538E2] text-white"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          `btn border-none hover:text-black ${
            isActive
              ? "bg-white text-[#9538E2] border-2 border-[#9538E2]"
              : "bg-[#9538E2] text-white"
          }`
        }
      >
        Statistics
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `btn border-none hover:text-black ${
            isActive
              ? "bg-white text-[#9538E2] border-2 border-[#9538E2]"
              : "bg-[#9538E2] text-white"
          }`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/gadgets"
        className={({ isActive }) =>
          `btn border-none hover:text-black ${
            isActive
              ? "bg-white text-[#9538E2] border-2 border-[#9538E2]"
              : "bg-[#9538E2] text-white"
          }`
        }
      >
        Gadgets
      </NavLink>
    </>
  );

  return (
    <div
      className={` ${
        pathname == "/" ? "border-t-2 border-x-2" : ""
      }  mt-2 rounded-t-xl max-w-screen-xl  mx-auto`}
    >
      <div
        className={`mx-2 mt-2  rounded-t-xl ${
          pathname == "/" ? "text-white bg-[#9538E2]" : "text-black "
        } `}
      >
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
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
                to="/gadgets"
              >
                Gadgets
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <NavLink
              to="/dashboard/cart"
              className="btn btn-ghost btn-circle text-xl"
            >
              <div className="indicator">
                <BsCart3 />
                <span className="badge badge-xs badge-primary indicator-item">
                  {" "}
                  {carts.length}{" "}
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/wishlist"
              className="btn btn-ghost btn-circle text-xl"
            >
              <div className="indicator">
                <FaRegHeart />
                <span className="badge badge-xs badge-primary indicator-item">
                  {wishlist.length}
                </span>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Nav text */}
      </div>
    </div>
  );
};

export default Navbar;
