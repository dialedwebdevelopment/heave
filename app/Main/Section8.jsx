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
    { src: "/logos/BUCKEDUP.png", alt: "BUCKEDUP Logo" },
    { src: "/logos/DOORDASH.png", alt: "DOORDASH Logo" },
    { src: "/logos/DUNKIN.png", alt: "DUNKIN Logo" },
    { src: "/logos/FASHIONNOVA.png", alt: "FASHIONNOVA Logo" },
    { src: "/logos/HEXCLAD.png", alt: "HEXCLAD Logo" },
    { src: "/logos/HINGELOGO.png", alt: "HINGELOGO Logo" },
    { src: "/logos/JELLYBELLY.png", alt: "JELLYBELLY Logo" },
    { src: "/logos/JACKINTHEBOX.png", alt: "JACKINTHEBOX Logo" },
    { src: "/logos/LIQUIDIV.png", alt: "LIQUIDIV Logo" },
    { src: "/logos/POLYMARKET.png", alt: "POLYMARKET Logo" },
    { src: "/logos/REEF.png", alt: "REEF Logo" },
    { src: "/logos/SONIC.webp", alt: "SONIC Logo" },
    { src: "/logos/TACO BELL.svg", alt: "TACO BELL Logo" },
    { src: "/logos/TEMU.png", alt: "TEMU Logo" },
    { src: "/logos/THAI EXPRESS.png", alt: "THAI EXPRESS Logo" },
    { src: "/logos/LYFT.png", alt: "LYFT Logo" },
    { src: "/logos/BEREAL.png", alt: "BEREAL Logo" },
  ];
  
  // Repeat images to not have issues
  const repeatedImages = [...images, ...images, ...images, ...images];
  
  return (
    <div className="eight-slider">
      <motion.div className="eight-slider-inside" style={{ x }}>
        {repeatedImages.map((image, index) => (
          <div className="eight-slider-item" key={index}>
            <NextImage
              src={image.src}
              className="eight-slider-item-image"
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
        {/* <ParallaxText baseVelocity={1} /> */}
        <div className="slider-right-fade" />
      </div>
      <div className="section-border" />
    </section>
  );
};