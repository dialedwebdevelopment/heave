/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import "../section8/section8.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section8Mobile = () => {
  const logoData = [
    { src: "/logos/berealwhite.webp", alt: "BeReal logo" },
    { src: "/logos/buckedupwhite.webp", alt: "Bucked Up logo" },
    { src: "/logos/doordashwhite.webp", alt: "DoorDash logo" },
    { src: "/logos/dunkinwhite.webp", alt: "Dunkin' logo" },
    { src: "/logos/HEXCLAD2.webp", alt: "HexClad logo" },
    { src: "/logos/HINGELOGO2.webp", alt: "Hinge logo" },
    { src: "/logos/jellybellywhite.webp", alt: "JellyBelly logo" },
    { src: "/logos/jackintheboxwhite.webp", alt: "Jack in the Box logo" },
    { src: "/logos/liquidivwhite.webp", alt: "Liquidity logo" },
    { src: "/logos/POLYMARKETwhite.webp", alt: "Polymarket logo" },
    { src: "/logos/reefwhite.webp", alt: "Reef logo" },
    { src: "/logos/sonicwhite.webp", alt: "Sonic logo" },
    { src: "/logos/tacobellwhite.webp", alt: "Taco Bell logo" },
    { src: "/logos/temuwhite.webp", alt: "Temu logo" },
    { src: "/logos/thaiexpresswhite.webp", alt: "Thai Express logo" },
    { src: "/logos/lyftwhite.webp", alt: "Lyft logo" },
  ];

  return (
    <section className="eight-mobile">
      <div className="eight-content">
        <Marquee 
          gradient={true} 
          gradientWidth={50} 
          gradientColor="#010101" 
          speed={100}
        >
          {logoData.map((logo, index) => (
            <div className="eight-slider-item" key={`logo-${index}`}>
              {logo.src && (
                <Image
                  src={logo.src}
                  className="eight-slider-item-image"
                  width={500}
                  height={500}
                  alt={logo.alt || "Brand logo"}
                />
              )}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="section-border" />
    </section>
  );
};

export default Section8Mobile;