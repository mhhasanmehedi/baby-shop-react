import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCardListView = ({ product }) => {
  const { id, title, description, thumbnail, price, rating } = product;

  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 border p-5">
      <div className="flex-[3]">
        <img className="h-full w-full" src={thumbnail} />
      </div>
      <div className="flex-[9]">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="my-2">{description}</p>
        <p className="text-xl font-mono">BDT {price}</p>
        <div className="flex my-3">
          {Array(Math.round(rating))
            .fill(0)
            .map((_, index) => (
              <AiFillStar className="text-yellow-600" key={index} />
            ))}
        </div>

        <div className="flex gap-2">
          <div
            onClick={() => dispatch(addToCart(product))}
            className="h-10 w-10 flex items-center justify-center transition cursor-pointer text-pink-700 hover:after:bg-pink-700 hover:text-white relative z-[1] after:absolute after:bg-gray-200  after:content: '' after:h-full after:w-full after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-[1]"
          >
            <AiOutlineShoppingCart />
          </div>
          <div className="h-10 w-10 flex items-center justify-center transition cursor-pointer text-pink-700 hover:after:bg-pink-700 hover:text-white relative z-[1] after:absolute after:bg-gray-200  after:content:  '' after:h-full after:w-full after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-[1]">
            <AiOutlineHeart />
          </div>
          <Link
            to={`/products/${id}`}
            className="h-10 w-10 flex items-center justify-center transition cursor-pointer text-pink-700 hover:after:bg-pink-700 hover:text-white relative z-[1] after:absolute after:bg-gray-200  after:content:  '' after:h-full after:w-full after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:-z-[1]"
          >
            <BsThreeDotsVertical />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardListView;
