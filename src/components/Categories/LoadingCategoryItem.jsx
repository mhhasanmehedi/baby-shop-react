import React from "react";
import { Link } from "react-router-dom";

const LoadingCategoryItem = () => {
  return (
    <Link className="animate-pulse border border-dashed flex items-center justify-center flex-col p-3">
      <div className="h-28 w-28 bg-gray-200"></div>
      <div className="mt-3 h-[20px] w-[100px] bg-gray-300"></div>
    </Link>
  );
};

export default LoadingCategoryItem;
