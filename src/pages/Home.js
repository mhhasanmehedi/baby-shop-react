import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryList from "../components/Categories/CategoryList";
import ProductCard from "../components/ProductCard/ProductCard";
import Loading from "../components/Ui/Loading";
import { fetchProducts } from "../features/products/productsSlice";

const Home = () => {
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  // set Title
  document.title = "Baby Shop";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && products?.length === 0)
    content = <div className="col-span-12">Products Not Found!</div>;
  if (!isError && !isLoading && products?.length > 0)
    content = products
      .slice(0, 14)
      .map((product) => <ProductCard product={product} key={product.id} />);
  return (
    <>
      <CategoryList />
      <div className="bg-gray-100 p-12">
        <div className="container m-auto">
          <div className="flex items-center justify-between mb-5">
            <div className=" relative text-2xl after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:w-14 after:bg-pink-800">
              New Product
            </div>
            <Link
              to="/"
              className="bg-pink-800 hover:bg-pink-900 text-white text-base py-2 px-4 rounded-full"
            >
              All Product
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
