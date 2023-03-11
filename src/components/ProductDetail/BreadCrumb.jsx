import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, category, id }) => {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="flex items-center text-gray-700 hover:text-gray-800 my-3"
      >
        <AiOutlineHome />
        Go Home
      </Link>
      <div>
        <BiChevronRight />
      </div>
      <Link
        to={`/categories/${category}`}
        className="flex items-center text-gray-700 hover:text-gray-800 my-3"
      >
        {category}
      </Link>
      <div>
        <BiChevronRight />
      </div>
      <Link
        to={`/products/${id}`}
        className="flex items-center text-gray-700 hover:text-gray-800 my-3"
      >
        {title}
      </Link>
    </div>
  );
};

export default BreadCrumb;
