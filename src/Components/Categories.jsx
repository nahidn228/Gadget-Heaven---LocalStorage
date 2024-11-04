/* eslint-disable react/prop-types */
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Categories = ({ categories }) => {
  const handleNavigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
      <div className="flex flex-col gap-4 bg-white shadow-xl p-8 rounded-xl">
        {/* Categories */}
        <NavLink
          onClick={() => handleNavigate("/gadgets")}
          className={({ isActive }) =>
            `btn ${isActive ? "bg-[#9538E2] text-white" : ""}`
          }
        >
          All Products
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              `btn ${isActive ? "bg-[#9538E2] text-white" : ""}`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
      <div className=" md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Categories;
