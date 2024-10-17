/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Experience } from "./Plane3D/Experience";
import { motion, useTransform, useScroll } from "framer-motion";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section8 = () => {

  return (
    <section className="eight">
    </section>
  );
};