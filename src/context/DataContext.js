import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [userCart, setUserCart] = useState([]);
  const [userWishlist, setUserWishlist] = useState([]);

  return (
    <DataContext.Provider
      value={{ userCart, setUserCart, userWishlist, setUserWishlist }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
