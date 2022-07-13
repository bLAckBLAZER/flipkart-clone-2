export const addToCart = (product, userCart, setUserCart) => {
  // Check if the product is already in cart

  const isPresentInCart = userCart.find((item) => item.id === product.id);

  // If yes, increment the qty

  if (isPresentInCart) {
    const updatedCart = userCart.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );

    setUserCart(updatedCart);
  } else {
    // If not, add the product along with new property qty: 1
    const updatedCart = userCart.concat({ ...product, qty: 1 });
    setUserCart(updatedCart);
  }
};

export const decrementFromCart = (product, userCart, setUserCart) => {
  if (product.qty === 1) {
    // remove from cart
    removeFromCart(product, userCart, setUserCart);
  } else {
    const updatedCart = userCart.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty - 1 } : item
    );
    setUserCart(updatedCart);
  }
};

export const removeFromCart = (product, userCart, setUserCart) => {
  const updatedCart = userCart.filter((item) => item.id !== product.id);
  setUserCart(updatedCart);
};

export const addToWishlist = (product, userWishlist, setUserWishlist) => {
  // check if product already present in wishlist

  const isPresentInWishlist = userWishlist.find(
    (item) => item.id === product.id
  );

  if (!isPresentInWishlist) {
    setUserWishlist(userWishlist.concat(product));
    console.log("new wishlist: ", userWishlist.concat(product));
  }
};

export const removeFromWishlist = (product, userWishlist, setUserWishlist) => {
  const updatedWishlist = userWishlist.filter((item) => item.id !== product.id);
  setUserWishlist(updatedWishlist);
};

export const incrementFromWishlist = (
  product,
  userWishlist,
  setUserWishlist
) => {
  const updatedWishlist = userWishlist.map((item) =>
    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
  );
  setUserWishlist(updatedWishlist);
};

export const decrementFromWishlist = (
  product,
  userWishlist,
  setUserWishlist
) => {
  if (product.qty === 1) {
    // remove from wishlist
    removeFromWishlist(product, userWishlist, setUserWishlist);
  } else {
    const updatedWishlist = userWishlist.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty - 1 } : item
    );
    setUserWishlist(updatedWishlist);
  }
};
