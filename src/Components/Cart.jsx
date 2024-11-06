import { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import modalImg from "../assets/Group.png";

import { Link } from "react-router-dom";
import { getAllCart, removeAllCart, removeCart } from "../utility";
import Cards from "./Cards";
const Cart = () => {
  const [carts, setAllCarts] = useState([]);
  const [prices, setAllPrices] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const carts = getAllCart();
    setAllCarts(carts);
    const singlePrice = carts.map((item) => item.price);
    //console.log(singlePrice);

    const totalPrice = singlePrice.reduce((a, b) => a + b, 0);
    setAllPrices(totalPrice);

    // const storedData = localStorage.getItem("cart");
    // if (storedData) {
    //   setAllData(JSON.parse(storedData));
    // }
  });

  // const removeAllCart = () => {
  //   localStorage.clear();
  //   setAllData([]);
  //   toast.success("Successfully Purchase ");
  // };

  // const addPrice = (pr) => {
  //   setAllPrices(prices + pr);
  // };

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
          <h4 className="text-xl font-bold">Total cost: {prices.toFixed(2)}</h4>
          <button
            onClick={handleSort}
            className="btn rounded-full outline outline-[#9538E2] text-[#9538E2] text-base btn-md "
          >
            Sort by Price
            <span className="font-bold text-lg">
              <GiSettingsKnobs />
            </span>
          </button>
          <Link
            onClick={() => removeAllCart()}
            className={` ${
              prices == 0 ? "btn-disabled" : ""
            } btn rounded-full outline outline-[#9538E2] bg-[#9538E2] text-white text-base btn-md`}
          >
            Purchase
          </Link>
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

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center">
          <img src={modalImg} alt="" />
          <h3 className="font-bold text-2xl py-4">Payment Successfully !</h3>
          <p className="text-gray-500 font-semibold">Thanks For Purchasing</p>
          <p className="text-gray-500 font-semibold">
            Total : {prices.toFixed(2)}
          </p>

          <div className="modal-action ">
            <button onClick={() => navigate("/")} className="btn w-full">
              Close
            </button>

            <form method="dialog ">
              {/* if there is a button in form, it will close the modal */}
              {/* <button onClick={() => navigate("/")} className="btn w-full">
                Close
              </button> */}
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
