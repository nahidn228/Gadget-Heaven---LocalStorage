import { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { getAllCart, removeCart } from "../utility";
import Cards from "./Cards";
const Cart = () => {
  const [carts, setAllCarts] = useState([]);
  const [prices, setAllPrices] = useState(0);

  useEffect(() => {
    const carts = getAllCart();
    setAllCarts(carts);
  }, []);

  const addPrice = (pr) => {
    setAllPrices(prices + pr);
  };

  const handleSort = () => {
    const sortByPrice = [...carts].sort((a, b) => b.price - a.price);
    setAllCarts(sortByPrice);
    // setAllPrices(sortByPrice);
  };

  const handleRemove = (id) => {
    removeCart(id);
    const carts = getAllCart();
    setAllCarts(carts);
  };

  return (
    <div>
      {/* Header text and Button */}
      <div className="flex justify-between items-center my-10 px-10 ">
        <div>
          <h4 className="text-2xl font-bold">Cart</h4>
        </div>
        <div className="flex items-center gap-4 ">
          <h4 className="text-xl font-bold">Total cost:{prices}</h4>
          <button
            onClick={handleSort}
            className="btn rounded-full outline outline-[#9538E2] text-[#9538E2] text-base btn-md "
          >
            Sort by Price
            <span className="font-bold text-lg">
              <GiSettingsKnobs />
            </span>
          </button>
          <button className="btn rounded-full outline outline-[#9538E2] text-[#9538E2] text-base btn-md ">
            Purchase
          </button>
        </div>
      </div>
      <div className=" md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 max-w-screen-xl  mx-auto px-12">
        {carts.map((gadget) => (
          <Cards
            handleRemove={handleRemove}
            key={gadget.product_id}
            gadget={gadget}
          ></Cards>
        ))}
      </div>
    </div>
  );
};

export default Cart;
