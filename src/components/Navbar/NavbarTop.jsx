import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import Search from "./Search";

const NavbarTop = () => {
  const { cartItems } = useSelector((state) => state.carts);

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <div className="border-b py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="logo flex items-center">
            <img src={Logo} className="h-16" alt="Logo Missing" />
            <div className="font-mono font-bold ml-3 uppercase tracking-[1px]">
              Baby Shop
              <span className="block tracting-0 lowercase text-pink-400">
                Happy Shopping
              </span>
            </div>
          </Link>
          <Search />
          <div className="flex gap-5">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-5xl">
                <BiUser />
              </Link>
              <div className="accountInfo">
                <Link to="/admin/add_product" className="hover:text-pink-600">
                  Admin
                </Link>
                <div className="">
                  <Link to="/sign_in">SignIn</Link>|
                  <Link to="/sign_up">SignUp</Link>
                </div>
              </div>
            </div>
            <Link
              to="/wish_list"
              className="bg-gray-200 flex items-center justify-center h-11 w-11 rounded-full"
            >
              <AiOutlineHeart className="text-pink-600te xt-xl" />
            </Link>
            <Link to="/cart" className="flex gap-3">
              <div className="relative bg-pink-600 flex items-center justify-center h-11 w-11 rounded-full">
                <AiOutlineShoppingCart className="text-white text-xl" />
                <div className="absolute top-0 right-0 h-5 w-5 text-sm flex items-center justify-center rounded-full bg-gray-600 text-white">
                  {cartItems.length}
                </div>
              </div>

              <div className="">
                Total Price <span className="block">৳ {totalPrice}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
