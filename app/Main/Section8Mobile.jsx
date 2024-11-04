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
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/BEREAL.webp?v=1730742102983"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/BUCKEDUP.webp?v=1730742137457"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/DOORDASH.webp?v=1730742582195"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/DUNKIN.webp?v=1730742224537"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/FASHIONNOVA.webp?v=1730742244549"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HEXCLAD.webp?v=1730742257966"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HINGELOGO.webp?v=1730742276687"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/JELLYBELLY.webp?v=1730742305727"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/JACKINTHEBOX.webp?v=1730742290321"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/LIQUIDIV.webp?v=1730742318894"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/POLYMARKET.webp?v=1730742377541"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/REEF.webp?v=1730742423440"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/SONIC.webp?v=1730742522716"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/TACO%20BELL.svg?v=1730742500132"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/TEMU.webp?v=1730742469736"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/THAIEXPRESS.webp?v=1730742438209"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/LYFT.webp?v=1730742358847"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
        </Marquee>
      </div>
      <div className="section-border" />
    </section>
  );
};