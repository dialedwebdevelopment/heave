/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section2 = () => {

  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();
  const img4Ref = useRef();
  const img5Ref = useRef();

  useEffect(() => {
    const imgs = [img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current,];
    const duration = 1; // Duration of the animation

    const crossfade = () => {
      gsap.timeline({ onComplete: crossfade })
        .to(imgs, { y: '-=80vh', duration, ease: "none" }) // Move images up
        .to(imgs[0], { y: '+=240vh', duration: 0 }); // Move the first image to the end without delay

      imgs.push(imgs.shift()); // Move the first image to the end of the array
      console.log(imgs);
    };

    // Start the crossfade for the first time
    crossfade();
  }, []); 

  return (
    <section className="section two">
      <div className="section-border" />
      <div className="two-content">
        <div className="two-content-left">
          <div className="textbox">
            <h1 className="subheadline white" >Making Short-Form Content That Captivates and Converts</h1>
            <motion.button className="button">
              <p className="description" >Let us tell you more</p>
              <div className="button-iconbox">
                <ChevronRight />
              </div>
            </motion.button>
          </div>
        </div>
        <div className="two-content-right">
          <div className="two-marquee">
            <div className="two-marquee-item" ref={img1Ref} >
              <Image src="/images/heavephone.png" className="two-marquee-item-image" alt="alt" width={1000} height={1000} />
            </div>
            <div className="two-marquee-item" ref={img2Ref} >
              <Image src="/images/heavelogo.png" className="two-marquee-item-image" alt="alt" width={1000} height={1000} />
            </div>
            <div className="two-marquee-item" ref={img3Ref} >
              <Image src="/images/heavephone.png" className="two-marquee-item-image" alt="alt" width={1000} height={1000} />
            </div>
            <div className="two-marquee-item" ref={img4Ref} >
              <Image src="/images/heavephone.png" className="two-marquee-item-image" alt="alt" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};