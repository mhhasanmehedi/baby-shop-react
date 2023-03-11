import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { fetchCategoryProducts } from "../features/categoryProducts/categoryProductsSlice";

const CategoryProducts = () => {
  const { categoryProducts, isLoading, isError, error } = useSelector(
    (state) => state.categoryProducts
  );
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    document.title = `${category} - Baby Shop`;

    dispatch(fetchCategoryProducts(category));
  }, [dispatch]);

  return (
    <div className="container my-7 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mx-4">
        {categoryProducts?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
