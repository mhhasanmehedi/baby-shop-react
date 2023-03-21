import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Ui/Loading";
import { fetchProduct } from "../features/product/productSlice";

import BreadCrumb from "../components/ProductDetail/BreadCrumb";
import ProductImgBox from "../components/ProductDetail/ProductImgBox";
import ProductContentBox from "../components/ProductDetail/ProductContentBox";
import RelatedProductList from "../components/RelatedProducts/RelatedProductList";

const Product = () => {
  const { isLoading, isError, error, product } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const { productId } = useParams();

  // set website title
  document.title = `${product.title} - Baby Shop`;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError & !product?.id)
    content = <div className="col-span-12">No Product Found!</div>;

  if (!isLoading && !isError && product?.id)
    content = (
      <div className="mx-4 ">
        <BreadCrumb
          title={product.title}
          category={product.category}
          id={product.id}
        />
        <div className="flex flex-col lg:flex-row my-4">
          <div className="lg:flex-[9] grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <ProductImgBox product={product} />
            <ProductContentBox product={product} />
          </div>
          <div className="lg:flex-[3] ">
            <RelatedProductList
              currentProductId={product.id}
              category={product.category}
            />
          </div>
        </div>
      </div>
    );

  return <div className="container m-auto">{content}</div>;
};

export default Product;
