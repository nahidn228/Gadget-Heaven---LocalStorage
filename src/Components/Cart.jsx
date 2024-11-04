import { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { getAllCart, removeCart } from "../utility";
import Cards from "./Cards";
const Cart = () => {
  const { id } = useParams();
  console.log(id);
  const [carts, setAllCarts] = useState([]);
  useEffect(() => {
    const carts = getAllCart();
    setAllCarts(carts);
  }, []);

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
          <h4 className="text-xl font-bold">Total cost:{}</h4>
          <button className="btn rounded-full outline outline-[#9538E2] text-[#9538E2] text-base btn-md ">
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
          <Cards handleRemove={handleRemove} key={gadget.product_id} gadget={gadget}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Cart;
