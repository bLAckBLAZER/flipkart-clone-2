import { Routes, Route } from "react-router-dom";
import { Products, Cart } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="flex flex-col justify-between bg-[#F1F3F6]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
