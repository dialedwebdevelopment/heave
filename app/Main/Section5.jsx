/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useTransform, useScroll } from "framer-motion";
import "./section5.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

// Centralized brand data
const brandData = [
  {
    name: "BeReal",
    image: "/images/casestudy2.webp",
    description: "BeReal, the social media app that encourages authenticity, wanted to engage young audiences and spark conversations around real, unfiltered moments. They challenged us to create content that would increase brand awareness and fuel organic word-of-mouth."
  },
  {
    name: "Citizen",
    image: "/images/casestudy3.webp",
    description: "Citizen, a live-time safety app, wanted to leverage a campaign to add more gen-z users on their platform. We combined Citizen's safety appeal with humor on X, effectively boosting brand awareness and app downloads in a tangible, measurable way."
  },
  {
    name: "Hexclad",
    image: "/images/casestudy4.webp",
    description: "HexClad, a top cookware brand, wanted to connect with Gen Z audiences online in a relatable and viral way. Heave orchestrated the development and dissemination of inventive memes that engaged millions into a topic as ordinary as cooking pots and pans."
  },
  {
    name: "Jack In The Box",
    image: "/images/casestudy5.webp",
    description: "Jack in the Box, a large US fast food chain, wished to increase awareness of their promotion on Saint Patrick's Day. We swiftly created and distributed content promoting Jack in the Box's holiday offer all in one day."
  },
  {
    name: "Tabs",
    image: "/images/casestudy6.webp",
    description: "Tabs Chocolate, a DTC e-commerce store, struggled with revenue growth, relying on just one marketing channel. Heave helped Tabs scale their revenue from five to seven figures per month through a consistent and coordinated flurry of memes, and organic content."
  },
  {
    name: "Baked Bags",
    image: "/images/casestudy1.webp",
    description: "Baked Bags, a CPG snack company, aimed to grow sales of its trendy infused-waffle cone snack through its online store. Heave boosted Baked Bags' online sales and social presence with clever organic content."
  }
];

const Section5 = () => {
  // REFS
  const titleRef = useRef();
  const targetRef = useRef(null);

  // Scroll animation with framer-motion
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-64.25%"]);

  // ANIMATIONS
  useEffect(() => {
    // Title animation
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(
      titleSplitText.words, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        stagger: 0.05, 
        duration: 1, 
        scrollTrigger: { 
          trigger: titleRef.current, 
          start: "top 95%" 
        } 
      }
    );

    // Card animations - using loop for better code organization

    gsap.to(".five-card", { opacity: 1, duration: 1.25, ease: "sine", stagger: 0.25, scrollTrigger: { trigger: ".five-card", start: "top 95%" } } );
  }, []);

  return (
    <section ref={targetRef} className="five">
      <div className="five-sticky">
        <div className="five-sticky-text-contents">
          <h1 className="subheadline white" ref={titleRef}>
            Some of the <span className="blue">brands we've worked with</span>
          </h1>
        </div>
        <motion.div style={{ x }} className="five-sticky-content">
          <div className="five-card-invisible" />
          
          {brandData.map((brand, index) => (
            <div 
              className="five-card opacityanimation" 
              key={index}
            >
              <div className="five-card-content">
                <h1 className="small-subheadline white">{brand.name}</h1>
                <div className="five-card-image">
                  <img 
                    src={brand.image} 
                    className="five-card-image-img" 
                    alt={`${brand.name} Case Study`} 
                  />
                </div>
                <p className="description white">{brand.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="five-content-gradient" />
    </section>
  );
};

export default Section5;