/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section4 = () => {

  // ISMOBILE

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const titleRef = useRef()
  const descriptionRef = useRef()
  const boxRef1 = useRef()
  const boxRef2 = useRef()
  const boxRef3 = useRef()
  const boxRef4 = useRef()

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleSplitText.chars, { opacity: 0 }, { opacity: 1, stagger: 0.01, scrollTrigger: { trigger: titleRef.current, start: "top bottom", end: "bottom center", scrub: true } })
    gsap.fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: descriptionRef.current, start: "top 80%", end: "top 50%", scrub: true  } })
    gsap.fromTo(boxRef1.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef1.current, start: "top bottom"  } })
    gsap.fromTo(boxRef2.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { delay: isMobile ? 0 : 0.25, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef2.current, start: "top bottom"  } })
    gsap.fromTo(boxRef3.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { delay: isMobile ? 0 : 0.5, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef3.current, start: "top bottom"  } })
    gsap.fromTo(boxRef4.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { delay: isMobile ? 0 : 0.75, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef4.current, start: "top bottom"  } })
  }, [])

  return (
    <section className="section four">
      <div className="four-content">
        <div className="four-content-item" ref={boxRef1} >
          <div className="four-content-item-box" >
            <p className="description" >Clients</p>
            <h1 className="subheadline blue" >340k+</h1>
          </div>
        </div>
        <div className="four-content-item" ref={boxRef2} >
          <div className="four-content-item-box" >
            <p className="description" >Reviews</p>
            <h1 className="subheadline blue" >500k+</h1>
          </div>
        </div>
        <div className="four-content-item" ref={boxRef3} >
          <div className="four-content-item-box" >
            <p className="description" >Views</p>
            <h1 className="subheadline blue" >670k+</h1>
          </div>
        </div>
        <div className="four-content-item" ref={boxRef4} >
          <div className="four-content-item-box" >
            <p className="description" >Followers</p>
            <h1 className="subheadline blue" >120k+</h1>
          </div>
        </div>
      </div>
    </section>
  );
};