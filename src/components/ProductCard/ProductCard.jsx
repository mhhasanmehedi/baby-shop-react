import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { id, thumbnail, title, rating, price } = product;

  return (
    <div className="group border">
      <div className="w-full h-{220px} overflow-hidden ">
        <Link
          to={`/products/${id}`}
          className="block w-full h-full transition  group-hover:scale-110"
        >
          <img src={thumbnail} className="h-full w-full" alt={title} />
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
