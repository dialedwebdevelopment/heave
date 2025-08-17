'use client';

import Image from 'next/image';
import React from 'react';
import { useHorizontalTimeline } from '@/hooks/useHorizontalTimeline';
import './horizontalTimeline.css';

const HorizontalTimeline = ({
  items,
  className = ''
}) => {
  const {
    activeIndex,
    imageOpacity,
    currentImageSrc,
    progressRefs,
    items: visibleItems,
    getItemOpacity,
    handleItemClick,
    handleImageLoad,
  } = useHorizontalTimeline({ items });

  const getGridColumns = () => {
    const length = visibleItems.length;
    if (length === 2) return 'horizontal-timeline-grid-cols-2';
    if (length === 3) return 'horizontal-timeline-grid-cols-3';
    return 'horizontal-timeline-grid-cols-4';
  };

  return (
    <div className={`horizontal-timeline-container ${className}`}>
      <div className="horizontal-timeline-image-wrapper">
        {currentImageSrc ? (
          <Image 
            src={currentImageSrc} 
            width={1000} 
            height={1000} 
            alt={items[activeIndex]?.title || ''} 
            className="horizontal-timeline-image" 
            style={{ opacity: imageOpacity }}
            priority={activeIndex === 0}
            onLoad={handleImageLoad}
          />
        ) : (
          <div className="horizontal-timeline-image-placeholder" />
        )}
      </div>
      <div className={`horizontal-timeline-grid ${getGridColumns()}`}>
        {visibleItems.map((item, index) => (
          <div 
            key={index} 
            className={`horizontal-timeline-item ${
              index === activeIndex ? 'horizontal-timeline-item-active' : 'horizontal-timeline-item-inactive'
            }`}
            onClick={() => handleItemClick(index)}
          >
            <h2 className="description">{item.title}</h2>
            <div className="horizontal-timeline-progress-wrapper">
              <div className="horizontal-timeline-progress-bg" />
              <div 
                ref={el => { 
                  if (el !== null) {
                    progressRefs.current[index] = el;
                  }
                }}
                className="horizontal-timeline-progress-bar" 
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
            <p className={`small-description ${getItemOpacity(index)}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

HorizontalTimeline.displayName = 'HorizontalTimeline';

export default React.memo(HorizontalTimeline);