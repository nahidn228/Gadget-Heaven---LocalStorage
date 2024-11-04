import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const Gadgets = () => {
  const gadgets = useLoaderData();
  return (
    <div className=" md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 max-w-screen-xl  mx-auto px-12">
      {gadgets.map((gadget) => (
        <Cards key={gadget.product_id} gadget={gadget}></Cards>
      ))}
    </div>
  );
};

export default Gadgets;
