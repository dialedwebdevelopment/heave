import React, { memo } from 'react';

const AnimatedTextRotator = memo(({ texts, isAnimating, className = '' }) => {
  const animationClass = isAnimating ? 'one-item-changing-text-animate' : '';
  
  return (
    <div className={`one-item-changing-text ${animationClass} ${className}`}>
      {texts.map((text, index) => (
        <span 
          key={index} 
          className={`one-item-changing-text-${index + 1}`}
        >
          {text}
        </span>
      ))}
    </div>
  );
});

AnimatedTextRotator.displayName = 'AnimatedTextRotator';

export default AnimatedTextRotator;