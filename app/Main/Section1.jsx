import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section1 = ({loadingAnimationFinished}) => {

  const titleRef = useRef()
  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()
  const imageRef4 = useRef()
  const typewriterRef1 = useRef()
  const typewriterRef2 = useRef()
  const typewriterRef3 = useRef()
  const boxTextRef = useRef()

  gsap.set(imageRef1.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef2.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef3.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef4.current, { yPercent: 50, zIndex: 1 });
  gsap.set(typewriterRef1.current, { opacity: 0 });
  gsap.set(typewriterRef2.current, { opacity: 0 });
  gsap.set(typewriterRef3.current, { opacity: 0 });

  useEffect(() => {
    const split = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: 3.25, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    const boxTextRefSplit = new SplitText(boxTextRef.current, { type: "chars" });
    gsap.fromTo(boxTextRefSplit.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: 3.75, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    gsap.fromTo(imageRef1.current, { yPercent: 50 }, { delay: 3.25, yPercent: 0, duration: 0.75, ease: "power2" })
    gsap.fromTo(imageRef2.current, { yPercent: 50 }, { delay: 3.45, yPercent: 0, duration: 0.5, ease: "power2" })
    gsap.fromTo(imageRef3.current, { yPercent: 50 }, { delay: 3.55, yPercent: 0, duration: 0.5, ease: "power2" })
    gsap.fromTo(imageRef4.current, { yPercent: 50 }, { delay: 3.75, yPercent: 0, duration: 0.5, ease: "power2" })
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
          <div className="one-item-changing-text">
            <span className="one-item-changing-text-1" ><h1 className="headline blue" ref={boxTextRef} >Brands</h1></span>
            <span className="one-item-changing-text-2">Shows</span>
            <span className="one-item-changing-text-3">Content</span>
            <span className="one-item-changing-text-4">Trends</span>
          </div>
        </div>
      </div>
      <div className="one-image">
          <Image src="/images/main1.png" className="one-image-img one-image-img-1" ref={imageRef1} width={2000} height={2000} alt="Main Image" />
          <Image src="/images/main3.png" className="one-image-img one-image-img-2" ref={imageRef2} width={2000} height={2000} alt="Main Image" />
          <Image src="/images/main2.png" className="one-image-img one-image-img-3" ref={imageRef3} width={2000} height={2000} alt="Main Image" />
          <Image src="/images/main4.png" className="one-image-img one-image-img-4" ref={imageRef4} width={2000} height={2000} alt="Main Image" />
        </div>
      <div className="one-gradient-background" />
      <div className="one-image-trigger"></div>
    </section>
  );
};