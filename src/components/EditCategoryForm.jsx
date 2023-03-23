import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";
import { updateProduct } from "../features/products/productsSlice";

const EditCategoryForm = ({ product }) => {
  const { isLoading, isError, error } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, data: { title, image } }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div>
          <label htmlFor="title">Title</label>
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
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="block p-3  border outline-none w-full"
            id="image"
            name="image"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button
          disabled={isLoading}
          className="bg-pink-700 hover:bg-pink-800 text-white p-3  uppercase tracking-[2px]"
        >
          {isLoading ? "Loading.." : "Update"}
        </button>

        {isError && <div>{error}</div>}
      </div>
    </form>
  );
};

export default EditCategoryForm;
