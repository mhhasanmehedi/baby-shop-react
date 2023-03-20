import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/shop/Sidebar";
import TopFilter from "../components/shop/TopFilter";
import Loading from "../components/Ui/Loading";
import { fetchProducts } from "../features/products/productsSlice";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductCardListView from "../components/shop/ProductCardListView";
import LoadingProductCard from "../components/ProductCard/LoadingProductCard";

const Shop = () => {
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );
  const { categories, search, view, sortStatus } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  // set Title
  document.title = "Shop - Baby Shop";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterCategory = (product) => {
    if (categories.length > 0) {
      return categories.includes(product.category);
    }
    return product;
  };

  const filterSearch = (product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  };

  let sortProducts = (a, b) => {
    if (sortStatus === "low_to_high") {
      return a.price - b.price;
    } else if (sortStatus === "high_to_low") {
      return b.price - a.price;
    } else {
      return 0;
    }
  };

  let content = null;

  if (isLoading)
    content = (
      <>
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
      </>
    );

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && products?.length === 0)
    content = <div className="col-span-12">Products Not Found!</div>;

  if (!isError && !isLoading && products.length > 0) {
    content = products
      .slice()
      .sort(sortProducts)
      .filter(filterCategory)
      .filter(filterSearch)
      .map((product) =>
        view === "grid" ? (
          <ProductCard product={product} key={product.id} />
        ) : (
          <ProductCardListView product={product} key={product.id} />
        )
      );
  }

  return (
    <div className="my-10">
      <div className="container mx-auto">
        <h3 className="text-center text-3xl font-semibold mb-10">Shop </h3>

        <div className="flex gap-5">
          <div className="flex-[9]">
            <TopFilter />
            <div
              className={`${
                view === "grid" && "grid-cols-5"
              } grid gap-[6px] mt-10`}
            >
              {content}
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Shop;
