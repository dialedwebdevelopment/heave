import React, { useRef, useEffect, forwardRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandCard from "@/components/ui/BrandCard";
import useSplitTextAnimation from "@/hooks/useSplitTextAnimation";
import { ANIMATION_DURATIONS, ANIMATION_STAGGERS } from "@/constants/animations";
import "@/components/sections/section5/section5.css";

gsap.registerPlugin(ScrollTrigger);

const CarouselSection = forwardRef(({ title, items = [], className = "", id, imageClassName = "", scrollDistance = "-64.25%" }, ref) => {
  const titleRef = useRef();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollDistance]);

  useSplitTextAnimation(titleRef);

  useEffect(() => {
    gsap.set(".five-card", { opacity: 0 });
    
    ScrollTrigger.batch(".five-card", {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        duration: ANIMATION_DURATIONS.SLOW,
        stagger: ANIMATION_STAGGERS.BOXES,
        overwrite: true
      }),
      start: "top 95%"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id={id} ref={targetRef} className={`five ${className}`}>
      <div className="five-sticky">
        <div className="five-sticky-text-contents">
          <h1 className="subheadline white" ref={titleRef}>
            {title}
          </h1>
        </div>
        <motion.div style={{ x }} className="five-sticky-content">
          <div className="five-card-invisible" />
          
          {items.map((item, index) => (
            <div key={index} className="five-card">
              <BrandCard brand={item} imageClassName={imageClassName} />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="five-content-gradient" />
    </section>
  );
});

CarouselSection.displayName = 'CarouselSection';

export default CarouselSection;