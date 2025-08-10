'use client';
import React, { memo } from 'react';
import { AnimateNumber } from 'motion-number';

const AnimatedNumber = memo(({ value = 0, className }) => {
  const safeValue = typeof value === 'number' && !isNaN(value) ? value : 0;
  
  return (
    <AnimateNumber className={className}>
      {safeValue}
    </AnimateNumber>
  );
});

AnimatedNumber.displayName = 'AnimatedNumber';

export default AnimatedNumber;