import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const GadgetCards = () => {
  const gadgets = useLoaderData();
  console.log(gadgets);

  return (
    <div className=" md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gadgets.map((gadget) => (
        <Cards key={gadget.product_id} gadget={gadget}></Cards>
      ))}
    </div>
  );
};

export default GadgetCards;
