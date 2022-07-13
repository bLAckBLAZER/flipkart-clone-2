// import { SearchBar } from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="p-2 bg-[#2874F0]  text-white">
      <div class="flex gap-8 m-auto w-4/5 items-center">
        <div
          class="flex flex-col hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <a href="">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt=""
              className="w-16"
            />
          </a>
          <small className="flex">
            <i>
              Explore <span className="text-[#F6E00A]">Plus</span>
            </i>
            <img
              width="20"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
            ></img>
          </small>
        </div>
        {/* <SearchBar /> */}
        <button className="bg-white text-[#2874F0] font-medium  px-2 py-1 w-28 hover:cursor-pointer">
          Login
        </button>
        <a className="font-medium hover:cursor-pointer">Become a seller</a>
        <div className="font-medium hover:cursor-pointer">
          More <span className="rotate-90 inline-block">{">"}</span>
        </div>
        <div className="font-medium hover:cursor-pointer flex gap-2 items-center">
          <FaShoppingCart size={20} />
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};
