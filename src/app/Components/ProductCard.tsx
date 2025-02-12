import React from 'react';

interface ProductCardsProps {
  productId: string;
  title: string;
  imgUrl: string;
}

export const ProductCards: React.FC<ProductCardsProps> = ({ productId, title, imgUrl }) => {
  return (
    <div className="product-card" key={productId}>
      <img src={imgUrl} alt={title} className="product-img" loading="lazy" />
      <span>{title}</span>
    </div>
  );
};
