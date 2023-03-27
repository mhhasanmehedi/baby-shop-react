import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductSkeletons = () => {
  return (
    <div className="animate-pulse flex gap-10 my-10">
      <div className="bg-gray-200 h-[580px] w-[480px]"></div>
      <div>
        <div className="h-14 w-[400px] bg-gray-200"></div>
        <div className="my-3 flex ">
          <AiFillStar className="text-gray-200 text-2xl" />
          <AiFillStar className="text-gray-200 text-2xl" />
          <AiFillStar className="text-gray-200 text-2xl" />
          <AiFillStar className="text-gray-200 text-2xl" />
        </div>
        <div className="h-8 bg-gray-200 w-[90px] mb-2"></div>
        <div className="h-20 bg-gray-200 w-[500px] mb-2"></div>
        <div className="h-20 bg-gray-200 w-[90px] mb-2"></div>
        <div className="h-20 bg-gray-200 w-[90px] mb-2"></div>
      </div>
    </div>
  );
};

export default ProductSkeletons;
