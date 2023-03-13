import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiUser, BiChevronDown } from "react-icons/bi";
import { MdCall, MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import Search from "./Search";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.carts);

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <>
      {/* Header Top Start */}
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
                  <Link to="/dashboard" className="hover:text-pink-600">
                    Account
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
      {/* Header Top End */}

      {/* Header Bottom Start */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="py-4 pr-5 uppercase font-semibold text-gray-800"
              >
                Home
              </Link>
              <div className="group relative py-4 pr-5">
                <div className="flex items-center uppercase font-semibold text-gray-800">
                  Category
                  <BiChevronDown className="transition group-hover:rotate-180" />
                </div>
                <div className="group-hover:visible group-hover:opacity-100 transition delay-200 absolute top-full invisible opacity-0 z-50 bg-slate-600 p-5">
                  <Link to="/" className="block w-full">
                    Babies
                  </Link>
                  <Link to="/" className="block w-full">
                    Boys
                  </Link>
                  <Link to="/" className="block w-full">
                    Girls
                  </Link>
                  <Link to="/" className="block w-full">
                    Accessories
                  </Link>
                  <Link to="/" className="block w-full">
                    Toys
                  </Link>
                  <Link to="/" className="block w-full">
                    Footwear
                  </Link>
                </div>
              </div>
              <Link
                to="/about"
                className="py-4 pr-5 uppercase font-semibold text-gray-800"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="py-4 pr-5 uppercase font-semibold text-gray-800"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:01855421692" className="flex items-center">
                <MdCall />
                01855421692
              </a>
              <a href="mail:support@gmail.com" className="flex items-center">
                <MdEmail />
                support@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header Bottom End  */}
    </>
  );
};

export default Navbar;
