import React from "react";
import { Link } from "react-router-dom";

const RelatedProductItem = ({ product }) => {
  const { id, title, thumbnail, price } = product;
  return (
    <Link
      to={`/products/${id}`}
      className="flex bg-gray-100 border border-dashed mb-2 last:mb-0"
    >
      <div className="w-[70px] ">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="p-2">
        <h5 className="font-medium text-base">{title}</h5>
        <p className="text-pink-600">$ {price}</p>
      </div>
    </Link>
  );
};

export default RelatedProductItem;
