import React, { useEffect, useState } from "react";

export const ProductShimmerCard = ({ productId, imgUrl, title }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
  const [isTitleLoading, setIsTitleLoading] = useState(true);
  useEffect(() => {
    const titleLoadTimeout = setTimeout(() => setIsTitleLoading(false), 3000); // Simulate title loading delay
    return () => clearTimeout(titleLoadTimeout);
  }, []);

  return (
    <div className="product-card" key={productId}>
      <div className="image-wrapper">
        {isImageLoading && <div className="shimmer-image"></div>}
        <img
          src={imgUrl}
          alt={title}
          className={`product-img ${isImageLoading ? "hidden" : ""}`}
          loading="lazy"
          onLoad={() => setIsImageLoading(false)}
          width={200}
          height={200}
        />
      </div>
      <div className="title-wrapper">
        {isTitleLoading && <div className="shimmer-title"></div>}
        <span className={`title ${!isTitleLoading ? "hidden" : ""}`} onLoad={() => setIsTitleLoading(false)}>
          {title}
        </span>
      </div>
    </div>
  );
};


/* CSS */
/*
.product-card {
  width: 220px;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}
.image-wrapper {
  width: 200px;
  height: 200px;
  position: relative;
}
.shimmer {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  position: absolute;
  top: 0;
  left: 0;
}
.shimmer-title {
  width: 80%;
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  margin: 10px auto;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.hidden {
  display: none;
}
*/
