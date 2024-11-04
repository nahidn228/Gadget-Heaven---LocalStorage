import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
const Dashboard = () => {
  const data = useLoaderData();
  //console.log(data);

  const location = useLocation();
  //console.log(location)

  return (
    <div className=" max-w-screen-xl  mx-auto">
      <div className="border-x-2 border-b-2 rounded-b-xl">
        <div className=" bg-[#9538E2] py-12 mx-2 mb-2  rounded-b-xl text-white">
          <div className="flex flex-col items-center text-center w-full md:w-2/3 mx-auto space-y-6 ">
            <h1 className="text-5xl font-semibold">Dashboard</h1>

            <p className="text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="space-x-10">
              <NavLink
                to={`/cart/${data.id}`}
                className="btn px-8 rounded-full text-[#9538E2] text-base transition hover:scale-105"
              >
                Cart
              </NavLink>
              <NavLink
                to="/wishlist"
                className="btn px-8 rounded-full text-[#9538E2] text-base transition hover:scale-105"
              >
                Wishlist
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
