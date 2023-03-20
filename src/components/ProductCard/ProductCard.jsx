import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, thumbnail, title, rating, price } = product;

  return (
    <div className="group border relative">
      <div className="w-full h-{220px} overflow-hidden ">
        <Link
          to={`/products/${id}`}
          className="block w-full h-full transition  group-hover:scale-110"
        >
          <img
            src={thumbnail}
            className="h-[202px] w-full object-cover"
            alt={title}
          />
        </Link>
      </div>

      <div className="absolute  top-3 -right-8 invisible transition duration-700 opacity-0 group-hover:visible group-hover:right-3 group-hover:opacity-100 flex flex-col gap-1">
        <div
          onClick={() => dispatch(addToCart(product))}
          className="h-8 w-8 flex items-center justify-center transition cursor-pointer text-pink-700 hover:after:bg-pink-700 hover:text-white relative z-[1] after:absolute after:bg-gray-200  after:content: '' after:h-full after:w-full after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-[1]"
        >
          <AiOutlineShoppingCart />
        </div>
        <div className="h-8 w-8 flex items-center justify-center transition cursor-pointer text-pink-700 hover:after:bg-pink-700 hover:text-white relative z-[1] after:absolute after:bg-gray-200  after:content:  '' after:h-full after:w-full after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-[1]">
          <AiOutlineHeart />
        </div>
        <Link
          to={`/products/${id}`}
          className="h-8 w-8 flex items-center justify-center transition cursor-pointer text-pink-700 hover:after:bg-pink-700 hover:text-white relative z-[1] after:absolute after:bg-gray-200  after:content:  '' after:h-full after:w-full after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-[1]"
        >
          <BsThreeDotsVertical />
        </Link>
      </div>

      <div className="p-1">
        <Link to={`/products/${id}`} className="text-base font-semibold ">
          {title}
        </Link>
        <div className="flex my-1">
          {Array(Math.round(rating))
            .fill(0)
            .map((_, index) => (
              <AiFillStar className="text-yellow-600" key={index} />
            ))}
        </div>
        <div className="text-base font-bold text-pink-600">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
