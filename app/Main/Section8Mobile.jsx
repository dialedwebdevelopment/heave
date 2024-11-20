/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section8Mobile = () => {

  return (
    <section className="eight-mobile">
      <div className="eight-content">
        <Marquee gradient={true} gradientWidth={50} gradientColor="#010101" speed={100} >
            <div className="eight-slider-item" >
                <img src="/logos/berealwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/buckedupwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/doordashwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/dunkinwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                {/* <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/FASHIONNOVA2.webp?v=1730837608954"  className="eight-slider-item-image" width={500} height={500} alt="alt" /> */}
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/HEXCLAD2.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/HINGELOGO2.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/jellybellywhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/jackintheboxwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/liquidivwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/POLYMARKETwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/reefwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/sonicwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/tacobellwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/temuwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/thaiexpresswhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="/logos/lyftwhite.webp"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
        </Marquee>
      </div>
      <div className="section-border" />
    </section>
  );
};