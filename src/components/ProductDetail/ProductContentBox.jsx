import React from "react";

const ProductContentBox = ({ product }) => {
  return (
    <div>
      <div className="text-3xl">{product.title}</div>
      <div className="text-2xl my-3 text-pink-600">BDT {product.price}</div>
      <div>{product.description}</div>
      <div className="mt-3">
        <span className="font-bold">Brand:</span> {product.brand || "Null"}
      </div>
      <div className=" ">
        <span className="font-bold">Rating:</span> {product.rating}
      </div>
      <div>
        <span className="font-bold">Category:</span> {product.category}
      </div>
    </div>
  );
};

export default ProductContentBox;
