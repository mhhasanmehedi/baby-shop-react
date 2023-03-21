import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProducts } from "../../features/relatedProducts/relatedProductSlice";
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

  if (isLoading) content = "Loading";
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedProducts?.length === 0) {
    content = <div className="col-span-12">No related Products found!</div>;
  }
  if (!isLoading && !isError && relatedProducts?.length > 0) {
    content = relatedProducts.map((product) => (
      <RelatedProductItem key={product.id} product={product} />
    ));
  }

  return (
    <>
      <h3 className="text-center bg-pink-600 text-white p-3 uppercase">
        Related Products
      </h3>
      <div className="col-span-full lg:col-auto ">{content}</div>
    </>
  );
};

export default RelatedProductList;
