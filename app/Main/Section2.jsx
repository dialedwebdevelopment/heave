/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section2 = (options) => {

  const titleRef = useRef()
  const buttonRef = useRef()
  const buttonRef2 = useRef()
  const sliderWrapperRef = useRef()

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })
    gsap.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: buttonRef.current, start: "top 95%" } })
    gsap.fromTo(buttonRef2.current, { opacity: 0 }, { delay: 0.25, opacity: 1, duration: 1, scrollTrigger: { trigger: buttonRef.current, start: "top 95%" } })
    if (window.innerWidth > 768) {
      gsap.fromTo(sliderWrapperRef.current, { rotate: "27.5deg", translateY: "-30vh", translateX: "2.5vw" }, { rotate: "0deg", translateY: "0vh", translateX: "0vw", scrollTrigger: { trigger: ".two-content-right", start: "top bottom", end: "bottom top", scrub: true } })
    }
  }, [])

  // CAROUSEL
  const [emblaRef] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 2 })] )

  const [emblaRef2] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: -2 })] )

  const [emblaRef3] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 2 })] )

  return (
    <section className="section two">
      <div className="section-border"></div>
      <div className="two-content">
        <div className="two-content-left">
          <div className="textbox two-textbox">
            <h1 className="subheadline white" ref={titleRef} >Making Short-Form <br /> Content That <span className="blue" >Engages</span> <br /> and <span className="blue" >Converts</span></h1>
            <button data-hover className="two-button" ref={buttonRef} >
              <p className="description" >Let us tell you more</p>
              <div className="two-circle-button">
                <ChevronRight className="two-icon" />
              </div>
              <div data-hover-bounds></div>
            </button>
          </div>
        </div>
        <div className="two-content-right">
          <div className="left-fade" />
          <div className="right-fade" />
          <div className="top-fade" />
          <div className="bottom-fade" />
          <div className="two-content-right-content" ref={sliderWrapperRef} >
            <div className="two-carousel" ref={emblaRef} >
              <div className="two-row">
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
              </div>
            </div>
            <div className="two-carousel" ref={emblaRef2} >
              <div className="two-row">
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
              </div>
            </div>
            <div className="two-carousel two-carousel-hidden" ref={emblaRef3} >
              <div className="two-row">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};