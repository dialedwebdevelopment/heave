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
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/berealwhite.webp?v=1731073048020"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/buckedupwhite.webp?v=1731073168839"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/doordashwhite.webp?v=1731073123398"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/dunkinwhite.webp?v=1731073185370"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/FASHIONNOVA2.webp?v=1730837608954"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HEXCLAD2.webp?v=1730837527138"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HINGELOGO2.webp?v=1730837375537"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/jellybellywhite.webp?v=1731072394122"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/jackintheboxwhite.webp?v=1731071800089"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/liquidivwhite.webp?v=1731072576614"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/POLYMARKETwhite.webp?v=1731139330408"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/reefwhite.webp?v=1731139188236"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/sonicwhite.webp?v=1731073240470"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/tacobellwhite.webp?v=1731073086942"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/temuwhite.webp?v=1731073067191"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/thaiexpresswhite.webp?v=1731073147258"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/lyftwhite.webp?v=1731073105721"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
        </Marquee>
      </div>
      <div className="section-border" />
    </section>
  );
};