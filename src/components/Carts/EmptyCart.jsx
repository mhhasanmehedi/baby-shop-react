import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex items-center text-center justify-center flex-col py-7">
      <AiOutlineShoppingCart className="text-[190px] text-gray-400 -rotate-12" />

      <div className="my-5">
        Your Cart is currently empty <br />
        Before proceed to checkout, you must add some products to your cart,
        <br />
        You will find a lot of interesting products on our "Shop" page
      </div>

      <Link
        className="flex items-center justify-center gap-2 bg-pink-700 hover:bg-pink-800 text-white py-3 px-7 rounded-full uppercase"
        to="/"
      >
        <AiOutlineShoppingCart /> Return to shop
      </Link>
    </div>
  );
};

export default EmptyCart;
