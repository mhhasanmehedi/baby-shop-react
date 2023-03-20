import React from "react";
import { AiFillStar } from "react-icons/ai";

const LoadingProductCard = () => {
  return (
    <div className="animate-pulse border relative">
      <div className="w-full h-{220px} ">
        <div className="block w-full h-[202px] transition bg-gray-200"></div>
      </div>

      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <div className="h-8 w-8 bg-gray-300"></div>
        <div className="h-8 w-8 bg-gray-300"></div>
        <div className="h-8 w-8 bg-gray-300"></div>
      </div>

      <div className="p-1">
        <div className="h-[20px] w-[80%] bg-gray-200 "></div>
        <div className="my-1 flex ">
          <AiFillStar className="text-gray-200" />
          <AiFillStar className="text-gray-200" />
          <AiFillStar className="text-gray-200" />
          <AiFillStar className="text-gray-200" />
        </div>
        <div className="h-[20px] w-20 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default LoadingProductCard;
