/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section3 = () => {

  const textRef = useRef()
  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()

  useEffect(() => {
    const titleSplitText = new SplitText(textRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0, }, { opacity: 1, stagger: 0.01, scrollTrigger: { trigger: ".three-content", start: "top bottom", end: "center center", scrub: true } })
    gsap.fromTo(imageRef1.current, { opacity: 0, }, { opacity: 1, scrollTrigger: { trigger: imageRef1.current, start: "top bottom", end: "center center", scrub: true } })
    gsap.fromTo(imageRef2.current, { opacity: 0, }, { opacity: 1, scrollTrigger: { trigger: imageRef2.current, start: "top bottom", end: "center center", scrub: true } })
    gsap.fromTo(imageRef3.current, { opacity: 0, }, { opacity: 1, scrollTrigger: { trigger: imageRef3.current, start: "top bottom", end: "center center", scrub: true } })
  }, [])

  return (
    <section className="section three">
      <div className="three-content">
        <h1 className="subheadline white" ref={textRef} >We don’t just create campaigns, we <span className="blue" > create <br /> movements</span>. <Image src="/images/heavetest.png" className="three-image three-image-1" ref={imageRef1} width={500} height={500} alt="alt" /> With our <span className="blue" >extensive network</span> <Image src="/images/heavetest2.png" className="three-image three-image-2" ref={imageRef2} width={500} height={500} alt="alt" /> of influencers and pages, we take your brand from concept to<span className="blue" > viral sensation</span>, <Image src="/images/heavetest3.png" className="three-image three-image-3" ref={imageRef3} width={500} height={500} alt="alt" /> ensuring your audience stays engaged.</h1>
      </div>
      <div className="section-border" />
    </section>
  );
};