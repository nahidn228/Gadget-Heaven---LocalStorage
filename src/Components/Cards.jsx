/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const Cards = ({ gadget, handleRemove }) => {
  const { pathname } = useLocation();
  const { product_title, product_image, price } = gadget || {};
  return (

    <>
    <div className="card bg-base-100 transition hover:scale-105 max-h-fit shadow-xl ">
    
      <figure>
        <img
          className="h-56 w-full object-cover"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title"> {product_title} </h2>
        {/* <p> {description} </p> */}
        <p> Price : ${price} </p>
        <div className="card-actions ">
          {pathname === "/dashboard" || pathname === "/dashboard/cart" ? (
            <Link
              onClick={() => handleRemove(gadget.product_id, price)}
              className="btn btn-sm py-2 px-8  outline outline-[#9538E2] rounded-full btn-warning"
            >
              Delete
            </Link>
          ) : (
            <Link
              to={`/gadgets/${gadget.product_id}`}
              className="btn btn-sm py-2 px-8 text-[#9538E2] outline outline-[#9538E2] rounded-full"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Cards;
