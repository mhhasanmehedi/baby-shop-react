import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { addToCart } from "../../features/cart/cartSlice";

const ProductContentBox = ({ product }) => {
  const dispatch = useDispatch();

  const shareUrl = `https://hellobaby.vercel.app/products/${product.id}`;

  return (
    <div>
      <div className="text-4xl">{product.title}</div>
      <div className="flex gap-[3px] text-2xl mt-3">
        {Array(Math.round(product.rating))
          .fill(0)
          .map((_, index) => (
            <AiFillStar className="text-yellow-600" key={index} />
          ))}
      </div>
      <p className="text-3xl my-3 text-pink-600">$ {product.price}.00</p>
      <p>{product.description}</p>

      <div className="flex items-stretch mt-10">
        {/* <div className="flex items-stretch">
          <div className="h-14 w-14 border flex items-center justify-center ">
            {quantity}
          </div>
          <div>
            <button
              className="h-7 w-7 flex items-center justify-center cursor-pointer border"
              onClick={() => setQuantity(quantity + 1)}
            >
              <AiOutlinePlus />
            </button>
            <button
              disabled={quantity === 1}
              className="h-7 w-7 flex items-center justify-center cursor-pointer border"
              onClick={() => setQuantity(quantity - 1)}
            >
              <AiOutlineMinus />
            </button>
          </div>
        </div> */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center py-3 px-10 font-semibold text-xl "
        >
          Add To Cart
        </button>
      </div>
      <button className="flex gap-1 items-center text-lg mt-2 hover:text-pink-600 ">
        <AiOutlineHeart /> Add To Wishlist
      </button>
      <p className="mt-3">
        <span className="font-bold">Brand:</span> {product.brand || "Null"}
      </p>
      <p className="mt-3">
        <span className="font-bold">Category:</span> {product.category}
      </p>
      <p className="mt-3">
        <span className="font-bold">SKU:</span> {product.sku}
      </p>
      <p className="mt-10">
        <span className="font-bold inline-block mr-4">Share:</span>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
        <PinterestShareButton url={shareUrl}>
          <PinterestIcon size={32} />
        </PinterestShareButton>
        <RedditShareButton url={shareUrl}>
          <RedditIcon size={32} />
        </RedditShareButton>
      </p>
    </div>
  );
};

export default ProductContentBox;
