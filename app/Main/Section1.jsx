import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./section1.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section1 = () => {

  const [textAnimationTrigger, setTextAnimationTrigger] = useState(false);

  const titleRef = useRef()
  const boxTextRef = useRef()
  const nullRef = useRef()

  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()
  const imageRef4 = useRef()
  
  // Store image data in an array for easier management
  const imageData = [
    { ref: imageRef1, path: "/images/main1.webp", yPercent: -5 },
    { ref: imageRef2, path: "/images/main3.webp", yPercent: 5 },
    { ref: imageRef3, path: "/images/main2.webp", yPercent: 0 },
    { ref: imageRef4, path: "/images/main4.webp", yPercent: 15 }
  ];

  useEffect(() => {
    // Check if this is the first visit or a refresh
    let titleDelay, boxTextDelay, nullDelay;
    
    if (sessionStorage.getItem('animationHeroSeen')) {
      // Shorter delays for subsequent refreshes
      titleDelay = 0.25;
      boxTextDelay = 0.75;
      nullDelay = 0.1;
    } else {
      // Original delays for first visit
      titleDelay = 4.25;
      boxTextDelay = 4.75;
      nullDelay = 3;
      
      // Set flag that animation has been seen
      sessionStorage.setItem('animationHeroSeen', 'true');
    }

    const split = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: titleDelay, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    const boxTextRefSplit = new SplitText(boxTextRef.current, { type: "chars" });
    gsap.fromTo(boxTextRefSplit.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: boxTextDelay, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    gsap.fromTo(nullRef.current, { opacity: 0 }, { delay: 3, opacity: 1, duration: 1, onComplete: () => setTextAnimationTrigger(true) });

    imageData.forEach(image => {
      gsap.fromTo(
        image.ref.current, 
        { yPercent: 0 }, 
        { 
          yPercent: image.yPercent, 
          scrollTrigger: { 
            trigger: ".one-image-trigger", 
            start: "top bottom", 
            end: "bottom top", 
            scrub: true 
          } 
        }
      );
    });
  }, [])

  return (
    <section className="section one">
      <div className="one-content">
        <div className="one-content-textbox">
          <h1 className="headline one-headline" ref={titleRef} >We Create</h1>
          <div className={`one-item-changing-text ${textAnimationTrigger ? "one-item-changing-text-animate" : ""}`}>
            <span className="one-item-changing-text-1" ><h1 className="headline blue" ref={boxTextRef} >Brands.</h1></span>
            <span className="one-item-changing-text-2">Shows.</span>
            <span className="one-item-changing-text-3">Content.</span>
            <span className="one-item-changing-text-4">Trends.</span>
          </div>
        </div>
      </div>
      <div className="one-image">
      {imageData.map((image, index) => (
          <img 
            key={image.id}
            src={image.path} 
            width={700} 
            height={700} 
            className="one-image-img"
            ref={image.ref}
            alt={`Main Image ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        ))}
      </div>
      <div className="one-gradient-background" />
      <div className="one-image-trigger"></div>
    </section>
  );
};

export default Section1;