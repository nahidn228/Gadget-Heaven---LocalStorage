import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
// import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  //console.log(categories);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Gadget Heaven Accessories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>

      <div>
        <Categories categories={categories}></Categories>
      </div>
    </div>
  );
};

export default Home;
