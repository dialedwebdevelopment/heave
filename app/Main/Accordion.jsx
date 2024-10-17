import React, { useEffect, useRef, useState } from "react";
import './accordion.css';

function Accordion({ index, isActive, onToggle, title, content }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isActive]);

  return (
    <div className="accordion-section">
      <div
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={() => onToggle(index)}
      >
        <div className="accordion-top">
          <h2 className="small-subheadline white five-accordion-title-margin-mobile five-accordion-title-mobile-width">{title}</h2>
          <div className="accordion-icon">
            <i className={`fa-solid fa-arrow-down ${isActive ? "rotate" : ""}`} style={{ transition: "transform 0.5s ease" }}></i>
          </div>
        </div>
        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="accordion-content"
        >
          <div
            className="small-description white"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;