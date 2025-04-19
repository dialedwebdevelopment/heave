/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionNumber from "motion-number";
import "./section4.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section4 = () => {
  const titleRef = useRef();
  
  // Create individual refs instead of using map (which caused the error)
  const boxRef0 = useRef();
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  
  // Store refs in an array after creating them individually
  const boxRefs = [boxRef0, boxRef1, boxRef2];
  
  // Define statistics data
  const statsData = [
    { label: "Impressions", key: "impressions", initialValue: 4700000000 },
    { label: "Likes", key: "likes", initialValue: 110000000 },
    { label: "Shares", key: "shares", initialValue: 30000000 }
  ];

  // Initialize state with data from statsData
  const [numbers, setNumbers] = useState(
    statsData.reduce((acc, stat) => {
      acc[stat.key] = stat.initialValue;
      return acc;
    }, {})
  );

  // Text and box animations
  useEffect(() => {
    // Title animation
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(
      titleSplitText.words, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        stagger: 0.05, 
        duration: 1, 
        scrollTrigger: { 
          trigger: titleRef.current, 
          start: "top 95%" 
        } 
      }
    );

    // Box animations with staggered delays
    boxRefs.forEach((boxRef, index) => {
      gsap.to(boxRef.current, { 
        delay: index * 0.25, 
        opacity: 1, 
        duration: 1.25, 
        ease: "sine", 
        scrollTrigger: { 
          trigger: boxRefs[0].current, 
          start: "top bottom" 
        } 
      });
    });
  }, []);

  // Randomly update numbers every 1.5 seconds
  useEffect(() => {
    const updateNumbers = () => {
      setNumbers(prev => {
        const newNumbers = { ...prev };
        
        // Update all statistics
        Object.keys(newNumbers).forEach(key => {
          const increment = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
          newNumbers[key] += increment;
        });
        
        return newNumbers;
      });
    };

    const interval = setInterval(updateNumbers, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section four">
      <div className="four-content">
        <div className="textbox four-textbox">
          <h1 className="subheadline white" ref={titleRef}>
            Our Live Statistics <span className="blue">This Year</span>
          </h1>
        </div>
        <div className="four-content-row">
          {statsData.map((stat, index) => (
            <React.Fragment key={stat.key}>
              <div 
                className="four-content-item opacityanimation" 
                ref={boxRefs[index]}
              >
                <div className="four-content-item-box">
                  <p className="description">{stat.label}</p>
                  <div className="four-number">
                    <MotionNumber 
                      value={numbers[stat.key]} 
                      locales="en-US" 
                      className="subheadline blue" 
                    />
                    <p className="subheadline blue">+</p>
                  </div>
                </div>
              </div>
              {index < statsData.length - 1 && <div className="four-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="section-border"></div>
    </section>
  );
};

export default Section4;