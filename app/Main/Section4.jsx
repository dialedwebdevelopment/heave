/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import MotionNumber from "motion-number";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section4 = () => {

  // ISMOBILE

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    // Set initial state on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const titleRef = useRef()
  const descriptionRef = useRef()
  const boxRef1 = useRef()
  const boxRef2 = useRef()
  const boxRef3 = useRef()
  const boxRef4 = useRef()

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleSplitText.chars, { opacity: 0 }, { opacity: 1, stagger: 0.01, scrollTrigger: { trigger: titleRef.current, start: "top bottom", end: "bottom center", scrub: true } })
    gsap.fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: descriptionRef.current, start: "top 80%", end: "top 50%", scrub: true  } })
    gsap.fromTo(boxRef1.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef1.current, start: "top bottom"  } })
    gsap.fromTo(boxRef2.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { delay: isMobile ? 0 : 0.25, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef2.current, start: "top bottom"  } })
    gsap.fromTo(boxRef3.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { delay: isMobile ? 0 : 0.5, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef3.current, start: "top bottom"  } })
    gsap.fromTo(boxRef4.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { delay: isMobile ? 0 : 0.75, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef4.current, start: "top bottom"  } })
  }, [isMobile])

  const [numbers, setNumbers] = useState({
    likes: 340200,
    shares: 123560,
    impressions: 510450,
  });

  // Randomly update numbers every 4 seconds
  useEffect(() => {
    const updateNumbers = () => {
      setNumbers(prev => ({
        likes: prev.likes + Math.floor(Math.random() * (250 - 100 + 1)) + 100,
        shares: prev.shares + Math.floor(Math.random() * (250 - 100 + 1)) + 100,
        follows: prev.follows + Math.floor(Math.random() * (250 - 100 + 1)) + 100,
        impressions: prev.impressions + Math.floor(Math.random() * (250 - 100 + 1)) + 100,
      }));
    };

    const interval = setInterval(updateNumbers, 4000); // Update every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="section four">
      <div className="four-content">
        <div className="textbox four-textbox">
          <h1 className="subheadline white" ref={titleRef} >Our Live Statistics <span className="blue" > This Year </span></h1>
        </div>
        <div className="four-content-row">
          <div className="four-content-item" ref={boxRef1} >
            <div className="four-content-item-box" >
              <p className="description" >Impressions</p> 
              <div className="four-number">
                <MotionNumber value={numbers.impressions} locales="fr-FR" className="subheadline blue" />
                <p className="subheadline blue" >+</p>
              </div>
            </div>
          </div>
          <div className="four-divider" />
          <div className="four-content-item" ref={boxRef2} >
            <div className="four-content-item-box" >
              <p className="description" >Likes</p>
              <div className="four-number">
                <MotionNumber value={numbers.likes} locales="fr-FR" className="subheadline blue" />
                <p className="subheadline blue" >+</p>
              </div>
            </div>
          </div>
          <div className="four-divider" />
          <div className="four-content-item" ref={boxRef3} >
            <div className="four-content-item-box" >
              <p className="description" >Shares</p>
              <div className="four-number">
                <MotionNumber value={numbers.shares} locales="fr-FR" className="subheadline blue" />
                <p className="subheadline blue" >+</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};