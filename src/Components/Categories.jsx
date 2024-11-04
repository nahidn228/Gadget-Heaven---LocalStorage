/* eslint-disable react/prop-types */
import { NavLink, Outlet } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
      <div className='flex flex-col gap-4'>
        {/* Categories */}
        <NavLink to="/categories" className="btn bg-[#9538E2]">
          All Products
        </NavLink>
        {categories.map((category) => (
          <NavLink key={category.category} to="/categories" className="btn">
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
