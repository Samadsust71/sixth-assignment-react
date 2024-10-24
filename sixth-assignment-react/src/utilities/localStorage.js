 
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
// const removedCart = (id) => {
//   const cart =getStoredCart()
//   const remaining = cart.filter(idx=> idx!==id)
//   const duplicateCart = cart.filter(idx=>idx ===id)
//   if (duplicateCart.length>1) {
//     const newSet=duplicateCart.slice(1)
//     const newRemaining = [...remaining,...newSet]
//     savedToLs(newRemaining)
//   }
//   else{
//     savedToLs(remaining)
//   }
  
// };
const removedCart = (id) => {
  const cart = getStoredCart();
  const matchingItems = cart.filter(idx => idx === id);
  const remainingItems = cart.filter(idx => idx !== id);

  if (matchingItems.length > 1) {
    const updatedCart = [...remainingItems, ...matchingItems.slice(1)];
    savedToLs(updatedCart);
  } else {
    savedToLs(remainingItems);
  }
};
const removeAllItem =()=> {
  localStorage.clear()
}

export { addTolLs, getStoredCart, removedCart,removeAllItem };
