import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";

const GadgetCards = () => {
  const gadgets = useLoaderData();
  //console.log(gadgets);

  const { category } = useParams();
  //console.log(category);

  const [gadget, setGadget] = useState([]);
  useEffect(() => {
    if (category) {
      //Category wise data showing
      const filterData = [...gadgets].filter(
        (item) => item.category === category
      );
      setGadget(filterData);
    } else {
      setGadget(gadgets.slice(0, 6));
    }
  }, [category, gadgets]);

  return (
    <div className=" md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gadget.map((gadget) => (
        <Cards key={gadget.product_id} gadget={gadget}></Cards>
      ))}
    </div>
  );
};

export default GadgetCards;
