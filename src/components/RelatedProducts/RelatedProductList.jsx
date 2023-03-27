import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProducts } from "../../features/relatedProducts/relatedProductSlice";
import LoadingProductCard from "../ProductCard/LoadingProductCard";
import ProductCard from "../ProductCard/ProductCard";
import RelatedProductItem from "./RelatedProductItem";

const RelatedProductList = ({ currentProductId, category }) => {
  const { relatedProducts, isLoading, isError, error } = useSelector(
    (state) => state.relatedProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchRelatedProducts({ category: category, id: currentProductId })
    );
  }, [dispatch, category, currentProductId]);

  // decide what to render
  let content = null;

  if (isLoading)
    content = (
      <>
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
      </>
    );
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedProducts?.length === 0) {
    content = <div className="col-span-12">No related Products found!</div>;
  }
  if (!isLoading && !isError && relatedProducts?.length > 0) {
    content = relatedProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  return (
    <>
      <h3 className="text-left border-b mt-[60px] text-3xl pb-3 capitalize">
        Related Products
      </h3>
      <div className="grid grid-cols-6 gap-5 my-8">{content}</div>
    </>
  );
};

export default RelatedProductList;
