import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section1 = () => {

  const [textAnimationTrigger, setTextAnimationTrigger] = useState(false);

  const titleRef = useRef()
  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()
  const imageRef4 = useRef()
  const boxTextRef = useRef()
  const nullRef = useRef()

  useEffect(() => {
    // Check if this is the first visit or a refresh
    let titleDelay, boxTextDelay, nullDelay;
    
    if (sessionStorage.getItem('animationSeen')) {
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
      sessionStorage.setItem('animationSeen', 'true');
    }

    const split = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: titleDelay, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    const boxTextRefSplit = new SplitText(boxTextRef.current, { type: "chars" });
    gsap.fromTo(boxTextRefSplit.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: boxTextDelay, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    gsap.fromTo(nullRef.current, { opacity: 0 }, { delay: 3, opacity: 1, duration: 1, onComplete: () => setTextAnimationTrigger(true) });

    gsap.fromTo(imageRef1.current, { yPercent: 0 }, { yPercent: -5, scrollTrigger: { trigger: ".one-image-trigger", start: "top bottom", end: "bottom top", scrub: true } })
    gsap.fromTo(imageRef2.current, { yPercent: 0 }, { yPercent: 5, scrollTrigger: { trigger: ".one-image-trigger", start: "top bottom", end: "bottom top", scrub: true } })
    gsap.fromTo(imageRef3.current, { yPercent: 0 }, { yPercent: 0, scrollTrigger: { trigger: ".one-image-trigger", start: "top bottom", end: "bottom top", scrub: true } })
    gsap.fromTo(imageRef4.current, { yPercent: 0 }, { yPercent: 15, scrollTrigger: { trigger: ".one-image-trigger", start: "top bottom", end: "bottom top", scrub: true } })
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
          <img src="/images/main1.webp" width={1000} height={1000} className="one-image-img" ref={imageRef1} alt="Main Image" />
          <img src="/images/main3.webp" width={1000} height={1000} className="one-image-img" ref={imageRef2} alt="Main Image" />
          <img src="/images/main2.webp" width={1000} height={1000} className="one-image-img" ref={imageRef3} alt="Main Image" />
          <img src="/images/main4.webp" width={1000} height={1000} className="one-image-img" ref={imageRef4} alt="Main Image" />
        </div>
      <div className="one-gradient-background" />
      <div className="one-image-trigger"></div>
    </section>
  );
};