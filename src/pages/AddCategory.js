import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "../components/Layout/AdminDashboardLayout";
import { createCategory } from "../features/categories/categoriesSlice";

const AddCategory = () => {
  const { isLoading, isError, error } = useSelector(
    (state) => state.categories
  );
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createCategory({ title, image }));

    if (!isLoading && !isError) {
      navigate("/admin/all_category");
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        Add Category
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div>
            <label className="" htmlFor="title">
              Category Title
            </label>
            <input
              type="text"
              className="block p-3 border outline-none w-full"
              id="title"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="" htmlFor="image">
              Category Image
            </label>
            <input
              type="text"
              className="block p-3 border outline-none w-full"
              id="image"
              name="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button
            disabled={isLoading}
            className="bg-pink-700 hover:bg-pink-800 text-white p-3  uppercase tracking-[2px]"
          >
            {isLoading ? "Loading.." : "Submit"}
          </button>

          {isError && <div>{error}</div>}
        </div>
      </form>
    </AdminDashboardLayout>
  );
};

export default AddCategory;
