import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { image, title, id } = category;
  return (
    <Link
      to={`/categories/${title}`}
      className=" hover:scale-105 transition duration-150   border border-dashed border-pink-500 flex items-center justify-center flex-col p-3"
    >
      <img src={image} className="h-28 w-28 object-cover " alt={title} />
      <div className="text-2xl mt-3">{title}</div>
    </Link>
  );
};

export default CategoryItem;
