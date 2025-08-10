import React, { forwardRef } from 'react';
import { ChevronRight } from 'lucide-react';
import './circleButton.css';

const CircleButton = forwardRef(({ 
  text, 
  onClick, 
  className = '', 
  icon: Icon = ChevronRight,
  iconClassName = '',
  circleClassName = ''
}, ref) => {
  return (
    <button 
      data-hover 
      className={`circle-button opacityanimation ${className}`}
      ref={ref} 
      onClick={onClick}
    >
      <div className="circle-button-text-mask">
        <span data-button-anim-target className="circle-button-text description">{text}</span>
      </div>
      <div className={`circle-button-icon ${circleClassName}`}>
        <div data-button-anim-target className="circle-button-icon-bg"></div>
        <div className="circle-button-icon-wrap">
          <div data-button-anim-target className="circle-button-icon-list">
            <Icon className={`circle-icon ${iconClassName}`} />
            <Icon className={`circle-icon ${iconClassName}`} />
            <Icon className={`circle-icon ${iconClassName}`} />
          </div>
        </div>
      </div>
      <div data-button-anim-target className="circle-button-bg"></div>
      <div data-hover-bounds></div>
    </button>
  );
});

CircleButton.displayName = 'CircleButton';

export default CircleButton;