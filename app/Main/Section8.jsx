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
    { src: "/logos/berealwhite.webp", alt: "BEREAL Logo" },
    { src: "/logos/buckedupwhite.webp", alt: "BUCKEDUP Logo" },
    { src: "/logos/doordashwhite.webp", alt: "DOORDASH Logo" },
    { src: "/logos/dunkinwhite.webp", alt: "DUNKIN Logo" },
    // { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/FASHIONNOVA2.webp?v=1730837608954", alt: "FASHIONNOVA Logo" },
    { src: "/logos/HEXCLAD2.webp", alt: "HEXCLAD Logo" },
    { src: "/logos/HINGELOGO2.webp", alt: "HINGELOGO Logo" },
    { src: "/logos/jellybellywhite.webp", alt: "JELLYBELLY Logo" },
    { src: "/logos/jackintheboxwhite.webp", alt: "JACKINTHEBOX Logo" },
    { src: "/logos/liquidivwhite.webp", alt: "LIQUIDIV Logo" },
    { src: "/logos/POLYMARKETwhite.webp", alt: "POLYMARKET Logo" },
    { src: "/logos/reefwhite.webp", alt: "REEF Logo" },
    { src: "/logos/sonicwhite.webp", alt: "SONIC Logo" },
    { src: "/logos/tacobellwhite.webp", alt: "TACO BELL Logo" },
    { src: "/logos/temuwhite.webp", alt: "TEMU Logo" },
    { src: "/logos/thaiexpresswhite.webp", alt: "THAI EXPRESS Logo" },
    { src: "/logos/lyftwhite.webp", alt: "LYFT Logo" },
  ];
  
  // Repeat images to not have issues
  const repeatedImages = [...images, ...images, ...images, ...images];
  
  return (
    <div className="eight-slider">
      <motion.div className="eight-slider-inside" style={{ x }}>
        {repeatedImages.map((image, index) => (
          <div className="eight-slider-item" key={index}>
            <img
              src={image.src}
              className="eight-slider-item-image"
              width={500}
              height={500}
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
        <div className="slider-right-fade" />
      </div>
      <div className="section-border" />
    </section>
  );
};