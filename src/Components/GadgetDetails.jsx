import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { PiHeartBold } from "react-icons/pi";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addCart } from "../utility";
import { addWishlist, getAllWish } from "../utility/wishlist";

const GadgetDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const [gadgets, setGadgets] = useState([]);
  const [isWish, setIsWish] = useState(false);

  useEffect(() => {
    const singleData = allData.find((item) => item.product_id == id);
    setGadgets(singleData);

    const wishlist = getAllWish();
    const isExist = wishlist.find(
      (item) => item.product_id === gadgets.product_id
    );
    if (isExist) {
      setIsWish(true);
    }
  }, [allData, id, gadgets.product_id]);

  const {
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
    brand,
  } = gadgets || {};

  //Handle Cart btn
  const handleCart = (gadgets) => {
    addCart(gadgets);
  };
  //Handle Wishlist btn
  const handleWishlist = (gadgets) => {
    addWishlist(gadgets);
    setIsWish(true);
  };

  return (
    <div>
      <div className="border-x-2 border-b-2 rounded-b-xl md:mb-[500px]">
        {/* Gadget Details Card */}
        <div className=" bg-[#9538E2] lg:pb-40 mx-2 mb-2  rounded-b-xl text-white">
          <div className="flex flex-col items-center text-center w-full md:w-2/3 mx-auto space-y-6 py-12">
            <h1 className="text-5xl font-semibold">Product Details</h1>

            <p className="text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>

        {/* Gadget Details */}

        <div className="border-2 bg-white/30 backdrop-blur-xl rounded-3xl md:w-4/6 mx-auto p-4 md:absolute md:left-52 md:top-72 ">
          <div className="hero bg-base-200 min-h-fit rounded-xl">
            <div className="hero-content flex-col lg:flex-row  gap-8">
              <img
                src={product_image}
                className="max-w-sm rounded-lg shadow-2xl h-96  object-cover "
              />
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold">{product_title}</h1>
                <p className="font-medium pb-6">Price: ${price}</p>
                <button className="btn btn-sm text-green-600 font-normal rounded-full outline outline-2 outline-green-500 bg-green-100 ">
                  {availability ? "In Stock" : "Out of Stock"}
                </button>
                <p className="font-medium">{description}</p>
                <p className="">
                  {" "}
                  <span className="font-medium">Category :</span> {category}
                </p>
                <p className="">
                  {" "}
                  <span className="font-medium">Brand :</span> {brand}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-black text-lg">
                    Specification
                  </span>
                  <br />
                  {Specification?.map((item, i) => (
                    <li key={i}> {item} </li>
                  ))}
                  {/* <li>{Specification[0]}</li>
                  <li>{Specification[1]}</li>
                  <li>{Specification[2]}</li> */}
                </p>
                <p className="py-6">
                  <span className="font-medium text-lg">Rating</span>
                  <span className="text-lg text-orange-400 flex items-center">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <span className="text-black btn btn-sm text-base">
                      {" "}
                      {rating}
                    </span>
                  </span>
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    onClick={() => handleCart(gadgets)}
                    className="btn bg-[#9538E2] rounded-full text-white px-8 "
                  >
                    Add To Card <FaCartPlus />
                  </Link>
                  <Link
                    disabled={isWish}
                    onClick={() => handleWishlist(gadgets)}
                    className="btn bg-[#9538E2] rounded-full text-white text-xl"
                  >
                    <PiHeartBold />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;

