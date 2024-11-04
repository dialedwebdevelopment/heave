import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin, SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const SectionFooter = () => {

  const titleRef = useRef()

  useEffect(() => {
    const split = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });
  }, [])

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-top">
         <h1 className="footer-title white" ref={titleRef} >Heavecorp</h1>
        </div>
      </div>
    </section>
  );
};