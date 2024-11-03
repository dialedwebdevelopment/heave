import React, { useEffect, useRef, useState, useContext } from "react";
import Accordion from "./Accordion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { TextPlugin, SplitText, ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import Image from "next/image";

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
        {/* <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="description" >© 2024 Heave. All rights reserved.</p>
            <p className="description" >About</p>
            <p className="description" >Why Us</p>
            <p className="description" >Projects</p>
            <p className="description" >Case Studies</p>
            <p className="description" >Process</p>
          </div>
          <div className="footer-bottom-right">
            <p className="description" >Instagram</p>
            <p className="description" >LinkedIn</p>
            <p className="description" >Twitter</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};