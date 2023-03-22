import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";
import { updateProduct } from "../features/products/productsSlice";

const EditProductForm = ({ product }) => {
  const { isLoading, isError, error } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  const [productData, setProductData] = useState({
    sku: product.sku,
    title: product.title,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
    thumbnail: product.thumbnail,
    images: product.images,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, data: productData }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div>
          <label className="" htmlFor="title">
            Product Title
          </label>
          <input
            type="text"
            className="block p-3 border outline-none w-full"
            id="title"
            name="title"
            value={productData.title}
            required
            onChange={(e) =>
              setProductData({
                ...productData,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="block p-3  border outline-none w-full"
              id="price"
              name="price"
              required
              value={productData.price}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  price: Number(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label htmlFor="discountPercentage">Discount Percentage</label>
            <input
              type="number"
              className="block p-3  border outline-none w-full"
              id="discountPercentage"
              name="discountPercentage"
              required
              value={productData.discountPercentage}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  discountPercentage: Number(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              className="block p-3  border outline-none w-full"
              id="rating"
              name="rating"
              required
              min="1"
              max="5"
              value={productData.rating}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  rating: Number(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              className="block p-3  border outline-none w-full"
              id="stock"
              name="stock"
              required
              value={productData.stock}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  stock: Number(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="block p-3  border outline-none w-full"
              id="brand"
              name="brand"
              required
              value={productData.brand}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  brand: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="block p-3  border outline-none w-full"
              required
              value={productData.category}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  category: e.target.value,
                })
              }
            >
              <option value="">Category Select..</option>
              {categories.length > 0 &&
                categories.map((cat) => (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="text"
              className="block p-3  border outline-none w-full"
              id="thumbnail"
              name="thumbnail"
              required
              value={productData.thumbnail}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  thumbnail: e.target.value,
                })
              }
            />
          </div>
          {/* <div>
            <label htmlFor="image1">Image 01</label>
            <input
              type="text"
              className="block p-3  border outline-none w-full"
              id="image1"
              name="image1"
              required
              value={productData.images[1]}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  images: [...productData.images, e.target.value],
                })
              }
            />
          </div>
          <div>
            <label htmlFor="image1">Image 02</label>
            <input
              type="text"
              className="block p-3  border outline-none w-full"
              id="image1"
              name="image1"
              required
              value={productData.images[2]}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  images: [...productData.images, e.target.value],
                })
              }
            />
          </div>
          <div>
            <label htmlFor="image1">Image 03</label>
            <input
              type="text"
              className="block p-3  border outline-none w-full"
              id="image1"
              name="image1"
              required
              value={productData.images[3]}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  images: [...productData.images, e.target.value],
                })
              }
            />
          </div>
          <div>
            <label htmlFor="image1">Image 04</label>
            <input
              type="text"
              className="block p-3  border outline-none w-full"
              id="image1"
              name="image1"
              required
              value={productData.images[4]}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  images: [...productData.images, e.target.value],
                })
              }
            />
          </div>
          <div>
            <label htmlFor="image1">Image 05</label>
            <input
              type="text"
              className="block p-3  border outline-none w-full"
              id="image1"
              name="image1"
              required
              value={productData.images[5]}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  images: [...productData.images, e.target.value],
                })
              }
            />
          </div> */}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="block p-3 border outline-none w-full min-h-[150px]"
            id="description"
            name="description"
            value={productData.description}
            onChange={(e) =>
              setProductData({
                ...productData,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>

        <button
          disabled={isLoading}
          className="bg-pink-700 hover:bg-pink-800 text-white p-3  uppercase tracking-[2px]"
        >
          {isLoading ? "Loading.." : "Update"}
        </button>

        {isError && <div>{error}</div>}
      </div>
    </form>
  );
};

export default EditProductForm;
