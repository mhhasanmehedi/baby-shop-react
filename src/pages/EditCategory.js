import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboardLayout from "../components/Layout/AdminDashboardLayout";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../features/categories/categoriesSlice";
import EditCategoryForm from "../components/EditCategoryForm";

const EditCategory = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { category, isLoading, isError } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [dispatch, categoryId]);

  //   decide what to render
  let content = null;
  if (isLoading) content = <div>Loading..</div>;
  if (!isLoading && isError) content = <div>Something is error</div>;

  if (!isLoading && !isError && category !== {})
    content = <EditCategoryForm category={category} />;

  return (
    <AdminDashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        Edit Category
      </div>
      {content}
    </AdminDashboardLayout>
  );
};

export default EditCategory;
