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

const Navbar = () => {
  return (
    <>
      {/* Header Top Start */}
      <div className="border-b py-3">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo Missing" />
            </Link>
            <form className="bg-gray-300">
              <input
                type="text"
                name="search"
                placeholder="Search product"
                className="border"
              />
              <button type="submit">
                <AiOutlineSearch />
              </button>
            </form>
            <div className="flex gap-5">
              <div className="flex items-center">
                <Link to="/" className="text-5xl">
                  <BiUser />
                </Link>
                <div className="accountInfo">
                  <Link to="/" className="hover:text-pink-600">
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
              <Link to="/cart" className="flex">
                <div className="bg-pink-600 flex items-center justify-center h-11 w-11 rounded-full">
                  <AiOutlineShoppingCart className="text-white text-xl" />
                </div>

                <div className="">
                  Total Price <span className="block">৳264</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header Top End */}

      {/* Header Bottom Start */}
      <div className="border-b">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="p-4 uppercase font-semibold text-gray-800"
              >
                Home
              </Link>
              <div className="group relative p-4">
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
                className="p-4 uppercase font-semibold text-gray-800"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="p-4 uppercase font-semibold text-gray-800"
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