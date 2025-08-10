/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleButton from "@/components/ui/circleButton/CircleButton";
import "./section2.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const videoRows = [
  [
    "/videos/heavevid1.mp4",
    "/videos/heavevid2.mp4",
    "/videos/heavevid3.mp4",
    "/videos/heavevid1.mp4"
  ],
  [
    "/videos/heavevid4.mp4",
    "/videos/heavevid5.mp4",
    "/videos/heavevid6.mp4",
    "/videos/heavevid4.mp4"
  ],
  [
    "/videos/heavevid7.mp4",
    "/videos/heavevid8.mp4",
    "/videos/heavevid9.mp4",
    "/videos/heavevid7.mp4"
  ]
];

const rowAnimations = [
  { 
    from: { translateY: (isMobile) => isMobile ? "30vh" : "40vh" }, 
    to: { translateY: (isMobile) => isMobile ? "-30vh" : "-40vh" }
  },
  { 
    from: { translateY: (isMobile) => isMobile ? "-30vh" : "-40vh" }, 
    to: { translateY: (isMobile) => isMobile ? "30vh" : "40vh" }
  },
  { 
    from: { translateY: (isMobile) => isMobile ? "50vh" : "40vh" }, 
    to: { translateY: (isMobile) => isMobile ? "0vh" : "-40vh" }
  }
];

const Section2 = () => {
  const titleRef = useRef();
  const buttonRef = useRef();
  const sliderWrapperRef = useRef();
  const contentRowRefs = useRef([]);

  if (contentRowRefs.current.length === 0) {
    contentRowRefs.current = Array(videoRows.length).fill().map(() => React.createRef());
  }

  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    const titleAnimation = gsap.fromTo(
      titleSplitText.words, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        stagger: 0.05, 
        duration: 1, 
        scrollTrigger: { 
          trigger: titleRef.current, 
          start: "top 95%" 
        } 
      }
    );

    const buttonAnimation = gsap.to(
      buttonRef.current, 
      { 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: { 
          trigger: buttonRef.current, 
          start: "top 95%" 
        } 
      }
    );

    const sliderAnimation = gsap.fromTo(
      sliderWrapperRef.current, 
      { 
        rotate: "27.5deg", 
        translateY: "-30vh", 
        translateX: "2.5vw" 
      }, 
      { 
        rotate: "0deg", 
        translateY: "0vh", 
        translateX: "0vw", 
        scrollTrigger: { 
          trigger: ".two-content-right", 
          start: "top bottom", 
          end: "bottom top", 
          scrub: 1 
        } 
      }
    );

    const rowAnims = contentRowRefs.current.map((ref, index) => {
      const isMobileValue = isMobile();
      return gsap.fromTo(
        ref.current,
        { 
          translateY: rowAnimations[index].from.translateY(isMobileValue) 
        },
        { 
          translateY: rowAnimations[index].to.translateY(isMobileValue),
          scrollTrigger: { 
            trigger: ".two-content-right", 
            start: "top bottom", 
            end: "bottom top", 
            scrub: 1 
          } 
        }
      );
    });

    return () => {
      titleAnimation.kill();
      buttonAnimation.kill();
      sliderAnimation.kill();
      rowAnims.forEach(anim => anim.kill());
      titleSplitText.revert();
    };
  }, []);

  const scrollToSectionTop = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="section2" className="section two">
      <div className="section-border"></div>
      <div className="two-content">
        <div className="two-content-left">
          <div className="textbox two-textbox">
            <h1 className="subheadline white" ref={titleRef}>
              Making Short-Form <br /> Content That <span className="blue">Engages</span> <br /> and <span className="blue">Converts</span>
            </h1>
            <CircleButton
              ref={buttonRef}
              text="Let us tell you more"
              onClick={() => scrollToSectionTop("section7")}
            />
          </div>
        </div>
        <div className="two-content-right">
          <div className="two-content-right-content" ref={sliderWrapperRef}>
            {videoRows.map((videos, rowIndex) => (
              <div className="two-content-right-content-row" key={`row-${rowIndex}`}>
                <div 
                  className="two-content-right-content-row-content" 
                  ref={contentRowRefs.current[rowIndex]}
                >
                  {videos.map((videoSrc, videoIndex) => (
                    <div className="two-item" key={`video-${rowIndex}-${videoIndex}`}>
                      <video 
                        src={videoSrc} 
                        className="two-item-image" 
                        autoPlay 
                        muted 
                        playsInline 
                        loop
                        preload="metadata"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;