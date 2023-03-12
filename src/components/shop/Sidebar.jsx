import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import Loading from "../Ui/Loading";
import CategoryItem from "./CategoryItem";

const Sidebar = () => {
  const { categories, isLoading, isError, error } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && categories?.length === 0)
    content = <div className="col-span-12">Categories Not Found!</div>;
  if (!isError && !isLoading && categories?.length > 0)
    content = categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ));

  return (
    <div className="flex-[3] ">
      <div className="border">
        <div className="bg-gray-200 text-center uppercase p-3 font-bold text-gray-700">
          Category
        </div>
        <ul>{content}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
