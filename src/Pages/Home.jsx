import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
// import { NavLink } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  //console.log(categories);
  return (
    <div>
      <Banner></Banner>

      <div>
        <Categories categories={categories}></Categories>
      </div>
    </div>
  );
};

export default Home;
