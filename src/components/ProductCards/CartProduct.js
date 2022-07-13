import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useData } from "../../context/DataContext";
import {
  addToCart,
  decrementFromCart,
  removeFromCart,
  addToWishlist,
} from "../../utils/productActions";

export const CartProduct = ({ product }) => {
  const {
    id,
    title,
    price,
    image,
    rating,
    size,
    brand,
    gender,
    qty,
    originalPrice,
  } = product;

  const { userCart, setUserCart, userWishlist, setUserWishlist } = useData();

  return (
    <div className="flex border-2 border-black-600  bg-white">
      <div className="flex flex-col items-center">
        <figure className="w-48 h-48 ">
          <img src={image} alt="" className="object-contain h-full m-auto" />
        </figure>
        <div className="flex items-center py-2 gap-2">
          <FiMinusCircle
            size={20}
            onClick={() => decrementFromCart(product, userCart, setUserCart)}
            className="cursor-pointer"
          />
          <div className="w-10 h-10 p-2 border-2 border-black text-center">
            {qty}
          </div>
          <FiPlusCircle
            size={20}
            onClick={() => addToCart(product, userCart, setUserCart)}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="p-2 flex flex-col">
        <div className="flex-1 flex flex-col">
          <h1>{brand}</h1>
          <h2>{title}</h2>
          <div>
            <strong>{`₹${price}`}</strong>
            <small className="ml-4 line-through">{`₹${originalPrice}`}</small>
          </div>

          <small>{`Size: ${size.map((s) => s)}`}</small>
          <small>{gender}</small>
        </div>

        <div className="justify-self-end flex gap-4">
          <button
            className="font-semibold"
            onClick={() => {
              addToWishlist(product, userWishlist, setUserWishlist);
              removeFromCart(product, userCart, setUserCart);
            }}
          >
            SAVE FOR LATER
          </button>
          <button
            className="font-semibold"
            onClick={() => removeFromCart(product, userCart, setUserCart)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};
