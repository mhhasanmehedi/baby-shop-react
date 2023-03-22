import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboardLayout from "../components/Layout/AdminDashboardLayout";
import { fetchCategories } from "../features/categories/categoriesSlice";

const AllCategory = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, isError, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <AdminDashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        All Category
      </div>
      <div>
        {isLoading && <div>Loading ...</div>}
        {categories.length > 0 &&
          categories.map((category) => (
            <li className="mb-3">
              {category.title}
              <button className="bg-gray-900 text-white ml-3">Delete</button>
            </li>
          ))}
      </div>
    </AdminDashboardLayout>
  );
};

export default AllCategory;
