import React, { memo } from 'react';
import Image from 'next/image';

const BrandCard = memo(({ brand, variant = 'default', imageClassName = '' }) => {
  const containerClass = variant === 'mobile' 
    ? 'five-mobile-item-content'
    : 'five-card-content';

  return (
    <div className={containerClass}>
      <h1 className="small-subheadline white">{brand.name}</h1>
      <div className="five-card-image">
        <Image 
          src={brand.image} 
          className={`five-card-image-img ${imageClassName}`} 
          alt={`${brand.name} Case Study`}
          width={500}
          height={500}
        />
      </div>
      {brand.description && <p className="description white">{brand.description}</p>}
    </div>
  );
});

BrandCard.displayName = 'BrandCard';

export default BrandCard;