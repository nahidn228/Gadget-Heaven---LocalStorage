import { toast } from "react-toastify";
//Local Storage

//add a gadgets from local storage
// get All gadgets from local storage
// remove selected gadgets from local storage

// get All gadgets from local storage

const getAllWish = () => {
  const allGadgets = localStorage.getItem("wishlist");
  if (allGadgets) {
    const wishlist = JSON.parse(allGadgets);
    return wishlist;
  } else {
    return [];
  }
};

//add a gadgets from local storage

const addWishlist = (gadgets) => {
  //get all previously saved gadget
  const wishlist = getAllWish();

  const isExist = wishlist.find((item) => item.product_id === gadgets.product_id);
  if (isExist) {
    return toast.warning("This gadgets is already exist");
  }

  wishlist.push(gadgets);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Successfully added to the wishlist");
};

// remove selected gadgets from local storage

export { addWishlist, getAllWish };
