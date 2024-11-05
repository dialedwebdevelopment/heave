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
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/FASHIONNOVA2.webp?v=1730837608954"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HEXCLAD2.webp?v=1730837527138"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/HINGELOGO2.webp?v=1730837375537"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
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
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/POLYMARKET2.webp?v=1730837299614"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/REEF2.webp?v=1730837209189"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/SONIC.webp?v=1730742522716"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/TACOBELL.webp?v=1730837098525"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/TEMU.webp?v=1730742469736"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
            </div>
            <div className="eight-slider-item" >
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/thaiexpress.svg?v=1730837817703"  className="eight-slider-item-image" width={500} height={500} alt="alt" />
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