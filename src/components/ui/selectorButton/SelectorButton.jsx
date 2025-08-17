"use client";

import React, { useRef, useEffect, memo } from "react";
import "./selectorButton.css";

const SelectorButton = memo(function SelectorButton({
  options,
  activeValue,
  onValueChange,
  className = "",
  buttonClassName = "",
  hoverClassName = "",
}) {
  const hoverRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const hoverElement = hoverRef.current;

    if (!container || !hoverElement) return;

    const moveHoverBlock = (target) => {
      if (!target) return;
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      hoverElement.style.width = `${targetRect.width}px`;
      hoverElement.style.transform = `translateX(${targetRect.left - containerRect.left}px)`;
    };

    const updatePosition = () => {
      const activeButton = container.querySelector(
        `[data-value="${activeValue}"]`,
      );
      if (activeButton) moveHoverBlock(activeButton);
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeValue]);

  return (
    <div
      ref={containerRef}
      className={`selector-button-container ${className}`}
    >
      {options.map((option) => (
        <button
          key={option.value}
          data-value={option.value}
          className={`selector-button ${
            activeValue === option.value ? "selector-button-active" : "selector-button-inactive"
          } ${buttonClassName}`}
          onClick={() => onValueChange(option.value)}
        >
          <div
            className={`selector-button-label small-description ${
              activeValue === option.value ? "selector-button-label-active" : "selector-button-label-inactive"
            }`}
          >
            {option.label}
          </div>
        </button>
      ))}
      <div
        ref={hoverRef}
        className="selector-button-hover"
      >
        <div className={`selector-button-hover-bg ${hoverClassName}`} />
      </div>
    </div>
  );
});

export default SelectorButton;