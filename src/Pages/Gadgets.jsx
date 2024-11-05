import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import { Helmet } from "react-helmet";

const Gadgets = () => {
  const gadgets = useLoaderData();
  return (
    <div className=" md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 max-w-screen-xl  mx-auto px-12">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget - Gadget Heaven Accessories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {gadgets.map((gadget) => (
        <Cards key={gadget.product_id} gadget={gadget}></Cards>
      ))}
    </div>
  );
};

export default Gadgets;
