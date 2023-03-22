import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboardLayout from "../components/Layout/AdminDashboardLayout";
import { fetchProduct } from "../features/product/productSlice";
import { useParams } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const {
    product,
    isLoading: productIsLoading,
    isError: productIsError,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  console.log(product);

  //   decide what to render
  let content = null;
  if (productIsLoading) content = <div>Loading..</div>;
  if (!productIsLoading && productIsError)
    content = <div>Something is error</div>;

  if (!productIsLoading && !productIsError && product)
    content = <EditProductForm product={product} />;

  return (
    <AdminDashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        Edit Product
      </div>
      {content}
    </AdminDashboardLayout>
  );
};

export default EditProduct;
