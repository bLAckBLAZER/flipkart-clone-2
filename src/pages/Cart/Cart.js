import { CartProduct } from "../../components/ProductCards/CartProduct";
import { useData } from "../../context/DataContext";
import { PriceSummary } from "./PriceSummary";

export const Cart = () => {
  const { userCart, setUserCart } = useData();

  return (
    <main className="mx-20 mt-4 grid grid-cols-10 gap-2">
      {userCart.length === 0 && (
        <h1 className="bg-white p-2 col-span-10 text-center	">Cart is Empty</h1>
      )}

      {userCart.length > 0 && (
        <>
          <section className="col-span-7 flex flex-col bg-white p-2">
            <h1>{`My Cart (${userCart.length})`}</h1>
            {userCart.map((product) => (
              <CartProduct product={product} />
            ))}
          </section>
          <PriceSummary />
        </>
      )}
    </main>
  );
};
