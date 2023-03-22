import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboardLayout from "../components/Layout/AdminDashboardLayout";
import {
  fetchProducts,
  removeProduct,
} from "../features/products/productsSlice";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <AdminDashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        All Product
      </div>
      <div>
        {isLoading && <div>Loading ...</div>}
        {products.length > 0 &&
          products.map((product) => (
            <li className="mb-3">
              {product.title}
              <button
                className="bg-gray-900 text-white ml-3"
                onClick={(e) => dispatch(removeProduct(product.id))}
              >
                Delete
              </button>
            </li>
          ))}
      </div>
    </AdminDashboardLayout>
  );
};

export default AllProduct;
