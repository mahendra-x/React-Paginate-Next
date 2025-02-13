import React, { useEffect, useState } from "react";

interface ProductShimmerCardProps {
  productId: string;
  imgUrl: string;
  title: string;
}

const ProductShimmerCard: React.FC<ProductShimmerCardProps> = ({ productId, imgUrl, title }) => {
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
        <span className={`title ${isTitleLoading ? "hidden" : ""}`}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default ProductShimmerCard;
