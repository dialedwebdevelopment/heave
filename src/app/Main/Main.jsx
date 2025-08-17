"use client";
import React from "react";
import Planes from "@/components/ui/planes/Planes";
import LoadingScreen from "@/components/ui/loadingScreen/LoadingScreen";
import { ReactLenis } from 'lenis/react';
import "./main.css";

import dynamic from "next/dynamic";

const Section1 = dynamic(() => import("@/components/sections/section1/Section1"),);
const Section2 = dynamic(() => import("@/components/sections/section2/Section2"),);
const Section3 = dynamic(() => import("@/components/sections/section3/Section3"),);
const Section4 = dynamic(() => import("@/components/sections/section4/Section4"),);
const Section5 = dynamic(() => import("@/components/sections/section5/Section5"),);
const SectionPlatform = dynamic(() => import("@/components/sections/sectionPlatform/SectionPlatform"),);
const SectionBrands = dynamic(() => import("@/components/sections/sectionBrands/SectionBrands"),);
const Section8 = dynamic(() => import("@/components/sections/section8/Section8"),);
const SectionFooter = dynamic(() => import("@/components/sections/sectionFooter/SectionFooter"),);
const Section9 = dynamic(() => import("@/components/sections/section9/section9"),);
const Section5Mobile = dynamic(() => import("@/components/sections/section5Mobile/Section5Mobile"),);
const Section9Mobile = dynamic(() => import("@/components/sections/section9Mobile/Section9Mobile"),);
const Section8Mobile = dynamic(() => import("@/components/sections/section8Mobile/Section8Mobile"),);

const Main = () => {
  return (
    <>
      <LoadingScreen />
      <ReactLenis root>
        <Planes />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section5Mobile />
        <Section8 />
        <Section8Mobile />
        <SectionPlatform />
        <SectionBrands />
        <Section9 />
        <Section9Mobile />
        <SectionFooter />
      </ReactLenis>
    </>
  );
};

export default Main;