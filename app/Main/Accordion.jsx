import React, { useEffect, useRef, useState } from "react";
import './accordion.css';
import { ArrowDown } from "lucide-react";

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
            <ArrowDown className={`accordion-icon-icon ${isActive ? "rotate" : ""}`} style={{ transition: "transform 0.5s ease" }} />
          </div>
        </div>
        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="accordion-content"
        >
          <div
            className="small-description accordion-description white"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;