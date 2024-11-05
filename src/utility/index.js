import { toast } from "react-toastify";
//Local Storage

//add a gadgets from local storage
// get All gadgets from local storage
// remove selected gadgets from local storage

// get All gadgets from local storage

const getAllCart = () => {
  const allGadgets = localStorage.getItem("cart");
  if (allGadgets) {
    const carts = JSON.parse(allGadgets);
    return carts;
  } else {
    return [];
  }
};

//add a gadgets from local storage

const addCart = (gadgets) => {
  //get all previously saved gadget
  const carts = getAllCart();

  const isExist = carts.find((item) => item.product_id === gadgets.product_id);
  if (isExist) {
    return toast.error("This gadgets is already exist");
  }

  carts.push(gadgets);
  localStorage.setItem("cart", JSON.stringify(carts));
  toast.success("Successfully added");
};

// remove selected gadgets from local storage
const removeCart = (id) => {
  const carts = getAllCart();
  const remainingCart = carts.filter((item) => item.product_id != id);
  localStorage.setItem("cart", JSON.stringify(remainingCart));
  toast.warning("Successfully Deleted");
};

const removeAllCart = () => {
  const cart = [];
  localStorage.clear();
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Successfully Purchase ");
};

export { addCart, getAllCart, removeAllCart, removeCart };
