import { GiSettingsKnobs } from "react-icons/gi";
const Cart = () => {
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
    </div>
  );
};

export default Cart;
