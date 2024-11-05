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
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/BEREAL.webp?v=1730742102983", alt: "BEREAL Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/BUCKEDUP.webp?v=1730742137457", alt: "BUCKEDUP Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/DOORDASH.webp?v=1730742582195", alt: "DOORDASH Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/DUNKIN.webp?v=1730742224537", alt: "DUNKIN Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/FASHIONNOVA2.webp?v=1730837608954", alt: "FASHIONNOVA Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HEXCLAD2.webp?v=1730837527138", alt: "HEXCLAD Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HINGELOGO2.webp?v=1730837375537", alt: "HINGELOGO Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/JELLYBELLY.webp?v=1730742305727", alt: "JELLYBELLY Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/JACKINTHEBOX.webp?v=1730742290321", alt: "JACKINTHEBOX Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/LIQUIDIV.webp?v=1730742318894", alt: "LIQUIDIV Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/POLYMARKET2.webp?v=1730837299614", alt: "POLYMARKET Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/REEF2.webp?v=1730837209189", alt: "REEF Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/SONIC.webp?v=1730742522716", alt: "SONIC Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/TACOBELL.webp?v=1730837098525", alt: "TACO BELL Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/TEMU.webp?v=1730742469736", alt: "TEMU Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/thaiexpress.svg?v=1730837817703", alt: "THAI EXPRESS Logo" },
    { src: "https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/LYFT.webp?v=1730742358847", alt: "LYFT Logo" },
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