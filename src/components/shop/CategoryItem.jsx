import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryRemoved,
  categorySelected,
} from "../../features/filter/filterSlice";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.filter);

  const isSelected = categories.includes(category.title) ? true : false;

  const handleSelect = () => {
    isSelected
      ? dispatch(categoryRemoved(category.title))
      : dispatch(categorySelected(category.title));
  };

  return (
    <li
      onClick={handleSelect}
      className={`${
        isSelected && "text-pink-600 font-semibold"
      } py-2 px-4 border-b text-[18px] last:border-b-transparent cursor-pointer flex gap-2 items-center`}
    >
      {isSelected ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
      {category.title}
    </li>
  );
};

export default CategoryItem;
