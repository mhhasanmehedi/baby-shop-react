import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import Loading from "../Ui/Loading";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
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
      <CategoryItem category={category} key={category.id} />
    ));

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {content}
      </div>
    </div>
  );
};

export default CategoryList;
