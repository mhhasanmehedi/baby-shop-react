import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categorySelected } from "../../features/filter/filterSlice";

const CategoryItem = ({ category }) => {
  const { image, title } = category;
  const dispatch = useDispatch();
  return (
    <Link
      to={`/shop`}
      onClick={() => dispatch(categorySelected(title))}
      className=" hover:scale-105 transition duration-150   border border-dashed border-pink-500 flex items-center justify-center flex-col p-3"
    >
      <img src={image} className="h-28 w-28 object-cover " alt={title} />
      <div className="text-2xl mt-3">{title}</div>
    </Link>
  );
};

export default CategoryItem;
