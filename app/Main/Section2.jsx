/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
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

  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  const [video3, setVideo3] = useState(null);
  const [video4, setVideo4] = useState(null);
  const [video5, setVideo5] = useState(null);

  useEffect(() => {
    // Preload video elements individually
    setVideo1(
      <video
        src="/videos/heavevideo1.mp4"
        muted
        playsInline
        loop
        preload="auto"
      />
    );

    setVideo2(
      <video
        src="/videos/heavevideo2.mp4"
        muted
        playsInline
        loop
        preload="auto"
      />
    );

    setVideo3(
      <video
        src="/videos/heavevideo3.mp4"
        muted
        playsInline
        loop
        preload="auto"
      />
    );

    setVideo4(
      <video
        src="/videos/heavevideo4.mp4"
        muted
        playsInline
        loop
        preload="auto"
      />
    );

    setVideo5(
      <video
        src="/videos/heavevideo5.mp4"
        muted
        playsInline
        loop
        preload="auto"
      />
    );
  }, []);


  // CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 2 })] )

  const [emblaRef2, emblaApi2] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: -2 })] )

  const [emblaRef3, emblaApi3] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 2 })] )

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
                  {video1 && React.cloneElement(video1, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video2 && React.cloneElement(video2, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video3 && React.cloneElement(video3, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video4 && React.cloneElement(video4, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video5 && React.cloneElement(video5, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
              </div>
            </div>
            <div className="two-carousel" ref={emblaRef2} >
              <div className="two-row">
              <div className="two-item" >
                  {video1 && React.cloneElement(video1, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video2 && React.cloneElement(video2, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video3 && React.cloneElement(video3, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video4 && React.cloneElement(video4, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video5 && React.cloneElement(video5, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
              </div>
            </div>
            <div className="two-carousel two-carousel-hidden" ref={emblaRef3} >
              <div className="two-row">
              <div className="two-item" >
                  {video1 && React.cloneElement(video1, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video2 && React.cloneElement(video2, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video3 && React.cloneElement(video3, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video4 && React.cloneElement(video4, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
                <div className="two-item" >
                  {video5 && React.cloneElement(video5, {
                    className: 'two-item-image',
                    autoPlay: true,
                    'data-wf-ignore': 'true'
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};