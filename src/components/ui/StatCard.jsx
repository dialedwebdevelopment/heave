import React, { forwardRef } from 'react';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

const StatCard = forwardRef(({ stat, value, showDivider = false }, ref) => {
  return (
    <>
      <div className="four-content-item opacityanimation" ref={ref}>
        <div className="four-content-item-box">
          <p className="description">{stat.label}</p>
          <div className="four-number">
            <AnimatedNumber 
              value={value} 
              className="subheadline blue" 
            />
            <p className="subheadline blue">+</p>
          </div>
        </div>
      </div>
      {showDivider && <div className="four-divider" />}
    </>
  );
});

StatCard.displayName = 'StatCard';

export default StatCard;