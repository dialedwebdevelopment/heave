/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Marquee from "react-fast-marquee";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section2Mobile = () => {

  const titleRef = useRef()
  const buttonRef = useRef()
  const sliderWrapperRef = useRef()

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })
    gsap.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: buttonRef.current, start: "top 95%" } })
    gsap.fromTo(sliderWrapperRef.current, { rotate: "27.5deg" }, { rotate: "0deg", scrollTrigger: { trigger: ".two-mobile", start: "top bottom", end: "bottom top", scrub: true } })
  }, [])

  // CAROUSEL
  const [emblaRef] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 2 })] )

  const [emblaRef2] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: -2 })] )

  const scrollToSectionTop = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section className="section two-mobile" >
      <div className="section-border" />
      <div className="two-content">
        <div className="two-content-left">
          <div className="textbox two-textbox">
            <h1 className="subheadline white" ref={titleRef} >Making Short-Form <br /> Content That <span className="blue" >Engages</span> <br /> and <span className="blue" >Converts</span></h1>
            <button className="two-button" ref={buttonRef} onClick={() => scrollToSectionTop("section7")} >
              <p className="description" >Let us tell you more</p>
              <div className="two-circle-button">
                <ChevronRight className="two-icon" />
              </div>
            </button>
          </div>
        </div>
        <div className="two-content-right" >
          <div className="left-fade" />
          <div className="right-fade" />
          <div className="top-fade" />
          <div className="bottom-fade" />
          <div className="two-content-right-content" ref={sliderWrapperRef} >
            <Marquee gradient={true} gradientColor="#010101" gradientWidth={"10vw"} >
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo1.mp4?v=1730721648346" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo2.mp4?v=1730721652829" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo3.mp4?v=1730721657920" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo4.mp4?v=1730721661781" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo5.mp4?v=1730721665211" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo6.mp4?v=1730721670541" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo7.mp4?v=1730721673586" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo8.mp4?v=1730721676866" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
                <div className="two-item" >
                  <video src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/heavevideo9.mp4?v=1730721682141" className="two-item-image" autoPlay="autoplay" muted playsInline={true} loop />
                </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};