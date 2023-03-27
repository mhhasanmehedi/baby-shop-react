import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../features/product/productSlice";
import BreadCrumb from "../components/ProductDetail/BreadCrumb";
import ProductImgBox from "../components/ProductDetail/ProductImgBox";
import ProductContentBox from "../components/ProductDetail/ProductContentBox";
import RelatedProductList from "../components/RelatedProducts/RelatedProductList";
import ProductSkeletons from "../components/skeletons/ProductSkeletons";

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
  if (isLoading) content = <ProductSkeletons />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError & !product?.id)
    content = <div className="col-span-12">No Product Found!</div>;

  if (!isLoading && !isError && product?.id)
    content = (
      <>
        <BreadCrumb
          title={product.title}
          category={product.category}
          id={product.id}
        />
        <div className="flex flex-col lg:flex-row gap-10 ">
          <ProductImgBox product={product} />
          <ProductContentBox product={product} />
        </div>
        <RelatedProductList
          currentProductId={product.id}
          category={product.category}
        />
      </>
    );

  return <div className="container m-auto px-4">{content}</div>;
};

export default Product;
