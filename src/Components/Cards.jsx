/* eslint-disable react/prop-types */


const Cards = ({gadget}) => {
    const { product_title, product_image, price } = gadget || {};
    return (
        <div className="card bg-base-100 transition hover:scale-105  shadow-xl">
      <figure>
        <img
          className="h-56 w-full object-cover"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {product_title} </h2>
        {/* <p> {description} </p> */}
        <p> Price : ${price} </p>
        <div className="card-actions ">
          <button className="btn btn-md text-[#9538E2] outline outline-[#9538E2] rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
    );
};

export default Cards;