/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import Image from "next/image";
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';
import useMouseParallax from '@/hooks/useMouseParallax';
import useIsMobile from '@/hooks/useIsMobile';
import { ANIMATION_STAGGERS, MOUSE_PARALLAX } from '@/constants/animations';
import "./section3.css";

const Section3 = () => {
  const isMobile = useIsMobile();
  const textRef = useRef()
  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()

  useSplitTextAnimation(textRef, {
    toVars: {
      opacity: 1,
      stagger: ANIMATION_STAGGERS.FAST
    },
    scrollTrigger: {
      trigger: ".three-content",
      start: "top bottom",
      end: "center 50%",
      scrub: true
    }
  });

  useFadeInOnScroll([imageRef1, imageRef2, imageRef3], {
    scrollTrigger: {
      start: "top 97.5%",
      end: "center center",
      scrub: true
    }
  });

  useMouseParallax([
    { ref: imageRef1, multiplierX: MOUSE_PARALLAX.MULTIPLIERS.SLOW, multiplierY: MOUSE_PARALLAX.MULTIPLIERS.SLOW },
    { ref: imageRef2, multiplierX: MOUSE_PARALLAX.MULTIPLIERS.MEDIUM, multiplierY: MOUSE_PARALLAX.MULTIPLIERS.MEDIUM },
    { ref: imageRef3, multiplierX: MOUSE_PARALLAX.MULTIPLIERS.FAST, multiplierY: MOUSE_PARALLAX.MULTIPLIERS.FAST }
  ], {
    speed: MOUSE_PARALLAX.SPEED,
    mobile: false
  });

  return (
    <section id="section3" className="section three">
      <div className="three-content">
        <h1 className="subheadline three-subheadline white" ref={textRef} >We don't just create campaigns, we <span className="blue" > ignite {!isMobile && <br />} movements</span>. <Image src="/brand/heavelogo3.webp" width={300} height={300} className="three-image three-image-1 opacityanimation" ref={imageRef1} alt="Heave logo" unoptimized /> Leveraging our <span className="blue" >vast network</span> <Image src="/brand/heavelogo2.webp" width={300} height={300} className="three-image three-image-2 opacityanimation" ref={imageRef2} alt="Heave logo" unoptimized /> of influencers and digital platforms, we elevate your brand from concept to<span className="blue" > viral success</span>, <Image src="/brand/heavelogo1.webp" width={300} height={300} className="three-image three-image-3 opacityanimation" ref={imageRef3} alt="Heave logo" unoptimized /> keeping your audience captivated and engaged.</h1>
      </div>
      <div className="section-border"></div>
    </section>
  );
};

export default Section3;