import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

const SingleCart = ({ cart, index }) => {
  const dispatch = useDispatch();
  const { id, title, thumbnail, price, quantity } = cart;
  return (
    <div className="flex  border-b border-l border-r items-center text-center max-w-4xl mx-auto">
      <div className="flex-[1]">{index + 1}</div>
      <div className="flex-[2] ">
        <img className="w-full" src={thumbnail} alt={title} />
      </div>
      <Link to={`/products/${id}`} className="flex-[7]">
        {title}
      </Link>
      <div className="flex-[3]">{price}</div>
      <div className="flex-[4] py-2">
        <div className="flex mx-auto items-center justify-center">
          <button
            onClick={() => dispatch(decrementQuantity(id))}
            className="h-8 w-8 flex items-center justify-center bg-gray-200 transition hover:bg-pink-600 hover:text-white"
          >
            <AiOutlineMinus />
          </button>
          <div className="w-8 h-8 outline-none bg-transparent flex items-center justify-center border-t border-b">
            {quantity}
          </div>
          <button
            onClick={() => dispatch(incrementQuantity(id))}
            className="h-8 w-8 flex items-center justify-center bg-gray-200 transition hover:bg-pink-600 hover:text-white"
          >
            <AiOutlinePlus />
          </button>
        </div>
        <button
          onClick={() => dispatch(removeFromCart(id))}
          className="text-center underline text-pink-600"
        >
          Remove
        </button>
      </div>
      <div className="flex-[3]">{price * quantity}</div>
    </div>
  );
};

export default SingleCart;
