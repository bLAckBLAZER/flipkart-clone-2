import { useData } from "../../context/DataContext";
import { addToCart } from "../../utils/productActions";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { id, title, price, image, rating, size, brand, gender } = product;

  const { userCart, setUserCart, userWishlist } = useData();

  const handleAddToCart = () => {
    addToCart(product, userCart, setUserCart);
  };

  const isPresentInCart = userCart.find((item) => item.id === product.id);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between border-2 border-black-600  max-w-175 bg-white">
      <figure className="w-175 h-96 ">
        <img src={image} alt="" className="object-contain h-full" />
      </figure>
      <div className="p-2 flex flex-col">
        <h1>{brand}</h1>
        <h2>{title}</h2>
        <strong>{`₹${price}`}</strong>
        <small>{`Size: ${size.map((s) => s)}`}</small>
        <small>{gender}</small>
      </div>
      {isPresentInCart ? (
        <button
          className="border-2 border-green-400  p-2 hover:bg-green-600 justify-end"
          onClick={() => navigate("/cart")}
        >
          Go to cart
        </button>
      ) : (
        <button
          className="bg-green-400 text-white p-2 hover:bg-green-600 justify-end"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};
