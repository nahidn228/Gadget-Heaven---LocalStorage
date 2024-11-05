import { useEffect, useState } from "react";

import { getAllWish } from "../utility/wishlist";
import Cards from "./Cards";

const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    const wishlist = getAllWish();
    setWishlists(wishlist);
  }, []);

  return (
    <div className='my-10'>
      <h2 className="text-2xl font-bold py-8">WishList</h2>

      <div className=" md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 max-w-screen-xl  mx-auto px-12">
        {wishlists.map((gadget) => (
          <Cards key={gadget.product_id} gadget={gadget}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
