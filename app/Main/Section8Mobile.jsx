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
                <Image src="/logos/BUCKEDUP.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/DOORDASH.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/DUNKIN.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/FASHIONNOVA.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/HEXCLAD.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/HINGELOGO.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/JELLYBELLY.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/JACKINTHEBOX.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/LIQUIDIV.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/POLYMARKET.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/REEF.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/SONIC.webp"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/TACO BELL.svg"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/TEMU.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/THAI EXPRESS.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/LYFT.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <Image src="/logos/BEREAL.png"  className="eight-slider-item-image" width={500} height={1000} alt="alt" />
            </div>
        </Marquee>
      </div>
      <div className="section-border" />
    </section>
  );
};