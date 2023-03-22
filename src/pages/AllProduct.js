import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminDashboardLayout from "../components/Layout/AdminDashboardLayout";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
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
        <div className="">
          {!isLoading &&
            products.length > 0 &&
            products.map((product) => (
              <div className="flex  border-b first:border-t text-center">
                <div className="border-r flex-[2]">
                  <img className="h-16 w-16" src={product.thumbnail} />
                </div>
                <div className="border-r flex-[2]">{product.sku}</div>
                <div className="border-r flex-[10]">{product.title}</div>
                <div className="border-r flex-[2]">{product.category}</div>
                <div className=" flex-[1]">
                  <div className="flex items-center">
                    <Link
                      className="p-2 bg-green-500 text-white"
                      to={`/admin/edit_product/${product.id}`}
                    >
                      <BiEdit />
                    </Link>
                    <button
                      className="p-2 bg-red-500 text-white"
                      onClick={(e) => dispatch(removeProduct(product.id))}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AllProduct;
