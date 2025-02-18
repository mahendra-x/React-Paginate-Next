import Image from 'next/image';
import React from 'react';

interface ProductCardsProps {
  productId: string;
  title: string;
  imgUrl: string;
}

export const ProductCards: React.FC<ProductCardsProps> = ({ productId, title, imgUrl }) => {
  const isLoading = true;

  return (
    <div className="product-card" key={productId}>
      <div className="image-wrapper">
        {!isLoading ? <div className="shimmer"></div> : <Image
          src={imgUrl}
          alt={title}
          className={`product-img`}
          loading="lazy"
          width={200}
          height={200}
        />}
        
      </div>
      <span>{title}</span>
    </div>
  );
};
