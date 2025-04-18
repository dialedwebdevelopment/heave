import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once outside the component
gsap.registerPlugin(SplitText, ScrollTrigger);

// Move image data outside component to prevent recreation on each render
const IMAGE_DATA = [
  { path: "/images/main1.webp", yPercent: -5 },
  { path: "/images/main3.webp", yPercent: 5 },
  { path: "/images/main2.webp", yPercent: 0 },
  { path: "/images/main4.webp", yPercent: 15 }
];

export const Section1 = () => {
  const [textAnimationTrigger, setTextAnimationTrigger] = useState(false);
  
  // Use a single ref for the container instead of individual refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const boxTextRef = useRef(null);
  const imageRefs = useRef([]);
  
  // Use useLayoutEffect for animations to run before browser paint
  useLayoutEffect(() => {
    // Check if this is the first visit or a refresh
    const isFirstVisit = !sessionStorage.getItem('animationHeroSeen');
    
    // Calculate delays based on visit status
    const delays = {
      title: isFirstVisit ? 4.25 : 0.25,
      boxText: isFirstVisit ? 4.75 : 0.75,
      null: isFirstVisit ? 3 : 0.1
    };
    
    // Set flag that animation has been seen
    if (isFirstVisit) {
      sessionStorage.setItem('animationHeroSeen', 'true');
    }

    // Create a single GSAP context for better memory management
    const ctx = gsap.context(() => {
      // Text animations
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: "chars" });
        gsap.fromTo(
          split.chars, 
          { 
            opacity: 0, 
            scale: 0.6, 
            rotationZ: () => gsap.utils.random(-20, 20),
            willChange: 'opacity, transform' 
          }, 
          { 
            delay: delays.title, 
            ease: 'power4', 
            opacity: 1, 
            scale: 1, 
            rotation: 0, 
            stagger: 0.065,
            onComplete: () => split.revert() // Clean up Split Text
          }
        );
      }

      if (boxTextRef.current) {
        const boxTextRefSplit = new SplitText(boxTextRef.current, { type: "chars" });
        gsap.fromTo(
          boxTextRefSplit.chars, 
          { 
            opacity: 0, 
            scale: 0.6, 
            rotationZ: () => gsap.utils.random(-20, 20),
            willChange: 'opacity, transform' 
          }, 
          { 
            delay: delays.boxText, 
            ease: 'power4', 
            opacity: 1, 
            scale: 1, 
            rotation: 0, 
            stagger: 0.065,
            onComplete: () => boxTextRefSplit.revert() // Clean up Split Text
          }
        );
      }

      // Trigger animation flag
      gsap.delayedCall(delays.null + 1, () => setTextAnimationTrigger(true));

      // Image parallax animations
      imageRefs.current.forEach((ref, index) => {
        if (ref) {
          ScrollTrigger.create({
            trigger: ".one-image-trigger",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onEnter: () => {
              gsap.to(ref, { 
                yPercent: IMAGE_DATA[index].yPercent,
                ease: "none"
              });
            }
          });
        }
      });
    }, sectionRef); // Scope to section

    // Cleanup function
    return () => {
      ctx.revert(); // This will kill all animations and ScrollTriggers created in this context
    };
  }, []);

  // Callback ref setup for images
  const setImageRef = (el, index) => {
    imageRefs.current[index] = el;
  };

  return (
    <section className="section one" ref={sectionRef}>
      <div className="one-content">
        <div className="one-content-textbox">
          <h1 className="headline one-headline" ref={titleRef}>We Create</h1>
          <div className={`one-item-changing-text ${textAnimationTrigger ? "one-item-changing-text-animate" : ""}`}>
            <span className="one-item-changing-text-1"><h1 className="headline blue" ref={boxTextRef}>Brands.</h1></span>
            <span className="one-item-changing-text-2">Shows.</span>
            <span className="one-item-changing-text-3">Content.</span>
            <span className="one-item-changing-text-4">Trends.</span>
          </div>
        </div>
      </div>
      <div className="one-image">
        {IMAGE_DATA.map((image, index) => (
          <img 
            key={index}
            src={image.path} 
            width={1000} 
            height={1000} 
            className="one-image-img" 
            ref={(el) => setImageRef(el, index)}
            alt={`Main Image ${index + 1}`}
            loading="lazy" 
          />
        ))}
      </div>
      <div className="one-gradient-background" />
      <div className="one-image-trigger"></div>
    </section>
  );
};