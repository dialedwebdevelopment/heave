/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextImage from "next/image";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

gsap.registerPlugin(SplitText, ScrollTrigger);

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 500
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const images = [
    { src: "/logos/shopifywhite.png", alt: "Shopify Logo" },
    { src: "/logos/amazonmarketplacewhite.png", alt: "Amazon Marketplace Logo" },
    { src: "/logos/edraywhite.png", alt: "Edray Logo" },
    { src: "/logos/dhlwhite.png", alt: "DHL Logo" },
    { src: "/logos/upswhite.png", alt: "UPS Logo" },
    { src: "/logos/roadonewhite.png", alt: "RoadOne Logo" },
    { src: "/logos/acswhite.png", alt: "ACS Logo" },
    { src: "/logos/targetwhite.png", alt: "Target Logo" },
    { src: "/logos/walmartwhite.png", alt: "Walmart Logo" },
    { src: "/logos/ebaywhite.png", alt: "Ebay Logo" },
    { src: "/logos/fedexwhite.png", alt: "Fedex Logo" },
  ];
  
  // Repeat images to not have issues
  const repeatedImages = [...images, ...images, ...images, ...images];
  
  return (
    <div className="four-slider">
      <motion.div className="four-slider-inside" style={{ x }}>
        {repeatedImages.map((image, index) => (
          <div className="four-slider-item" key={index}>
            <NextImage
              src={image.src}
              className="four-slider-item-image"
              width={500}
              height={1000}
              alt={image.alt}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const Section8 = () => {

  return (
    <section className="eight">
      <div className="eight-content">
        <div className="slider-left-fade" />
        <ParallaxText baseVelocity={-1} />
        <ParallaxText baseVelocity={1} />
        <div className="slider-right-fade" />
      </div>
      <div className="section-border" />
    </section>
  );
};