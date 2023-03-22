import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const ProductImgBox = ({ product }) => {
  const [image, setImage] = useState(product.thumbnail);
  return (
    <div className="lg:w-[480px]">
      <div className="border mb-3">
        <img src={image} alt={product.title} className="w-full h-[508px]" />
      </div>

      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {product.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="Product Img"
              className="h-[122px] w-full border border-red-300 cursor-pointer object-cover"
              onClick={() => setImage(img)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImgBox;
