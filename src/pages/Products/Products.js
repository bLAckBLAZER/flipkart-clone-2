import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await axios.get("data.json");

      // console.log(products.data);

      setProducts(products.data);
    };

    getAllProducts();
  }, []);

  return (
    <main className="mx-20 pd-4 grid grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </main>
  );
};
