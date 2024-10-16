import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section1 = ({loadingAnimationFinished}) => {

  const titleRef= useRef()
  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()
  const imageRef4 = useRef()

  gsap.set(imageRef1.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef2.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef3.current, { yPercent: 50, zIndex: 1 });
  gsap.set(imageRef4.current, { yPercent: 50, zIndex: 1 });
  gsap.set(titleRef.current, { opacity: 0 });

  useEffect(() => {
    if (loadingAnimationFinished) {
      gsap.set(titleRef.current, { opacity: 1 });
      const split = new SplitText(titleRef.current, { type: "chars" });
      gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
      gsap.fromTo(imageRef1.current, { yPercent: 50 }, { yPercent: 0, duration: 0.75, ease: "power2" })
      gsap.fromTo(imageRef2.current, { yPercent: 50 }, { delay: 0.2, yPercent: 0, duration: 0.5, ease: "power2" })
      gsap.fromTo(imageRef3.current, { yPercent: 50 }, { delay: 0.35, yPercent: 0, duration: 0.5, ease: "power2" })
      gsap.fromTo(imageRef4.current, { yPercent: 50 }, { delay: 0.5, yPercent: 0, duration: 0.5, ease: "power2" })
    }
  }, [loadingAnimationFinished])

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
          <h1 className="headline one-headline" ref={titleRef} >We Create <span className="blue" >Brands</span></h1>
        </div>
      </div>
      <div className="one-image">
          <Image src="/images/main1.png" className="one-image-img" ref={imageRef1} width={2000} height={2000} alt="Main Image" />
          <Image src="/images/main3.png" className="one-image-img" ref={imageRef2} width={2000} height={2000} alt="Main Image" />
          <Image src="/images/main2.png" className="one-image-img" ref={imageRef3} width={2000} height={2000} alt="Main Image" />
          <Image src="/images/main4.png" className="one-image-img" ref={imageRef4} width={2000} height={2000} alt="Main Image" />
        </div>
      <div className="one-gradient-background" />
      <div className="one-image-trigger"></div>
    </section>
  );
};