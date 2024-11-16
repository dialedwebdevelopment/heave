import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

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

  gsap.set(imageRef1.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef2.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef3.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef4.current, { yPercent: 50, zIndex: 1 });

  useEffect(() => {
    const split = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: 4.25, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    const boxTextRefSplit = new SplitText(boxTextRef.current, { type: "chars" });
    gsap.fromTo(boxTextRefSplit.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: 4.75, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    gsap.fromTo(imageRef1.current, { yPercent: 50 }, { delay: 4.25, yPercent: 0, duration: 0.75, ease: "power2" })
    gsap.fromTo(imageRef2.current, { yPercent: 50 }, { delay: 4.4, yPercent: 0, duration: 0.5, ease: "power2" })
    gsap.fromTo(imageRef3.current, { yPercent: 50 }, { delay: 4.65, yPercent: 0, duration: 0.5, ease: "power2" })
    gsap.fromTo(imageRef4.current, { yPercent: 50 }, { delay: 4.8, yPercent: 0, duration: 0.5, ease: "power2" })
    gsap.fromTo(nullRef.current, { opacity: 0 }, { delay: 3, opacity: 1, duration: 1, onComplete: () => setTextAnimationTrigger(true) });
  }, [])

  useEffect(() => {
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
          <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/main1.webp?v=1730738898250" fetchPriority="high" width={1000} height={1000} className="one-image-img" ref={imageRef1} alt="Main Image" />
          <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/main3.webp?v=1730738903167" fetchPriority="high" width={1000} height={1000} className="one-image-img" ref={imageRef2} alt="Main Image" />
          <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/main2.webp?v=1730738900292" fetchPriority="high" width={1000} height={1000} className="one-image-img" ref={imageRef3} alt="Main Image" />
          <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/main4.webp?v=1730738905467" fetchPriority="high" width={1000} height={1000} className="one-image-img" ref={imageRef4} alt="Main Image" />
        </div>
      <div className="one-gradient-background" />
      <div className="one-image-trigger"></div>
    </section>
  );
};