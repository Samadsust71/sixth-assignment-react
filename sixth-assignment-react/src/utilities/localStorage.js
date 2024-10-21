 
const getStoredCart = () => {
  const cartStrigified = localStorage.getItem("cart");
  if (cartStrigified) {
    return JSON.parse(cartStrigified);
  }
  return [];
};

const savedToLs = (cart) => {
  const cartStrigified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStrigified);
};

const addTolLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  savedToLs(cart);
};
const removedCart = (id) => {
  const cart =getStoredCart()
  const remaining = cart.filter(idx=> idx!==id)
  savedToLs(remaining)
  
};
const removeAllItem =()=> {
  localStorage.clear()
}

export { addTolLs, getStoredCart, removedCart,removeAllItem };
