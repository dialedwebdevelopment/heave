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

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })
    gsap.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: buttonRef.current, start: "top 95%" } })
  }, [])

  // CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 2.5})] )

  const [emblaRef2, emblaApi2] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: -2.5})] )

  const [emblaRef3, emblaApi3] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 2.5})] )

  return (
    <section className="section two">
      <div className="two-border"></div>
      <div className="two-content">
        <div className="two-content-left">
          <div className="textbox">
            <h1 className="subheadline white" ref={titleRef} >Making Short-Form <br /> Content That <span className="blue" >Engages</span> <br /> and <span className="blue" >Converts</span></h1>
            <motion.button className="two-button" ref={buttonRef} >
              <p className="description" >Let us tell you more</p>
              <div className="button-iconbox">
                <ChevronRight />
              </div>
            </motion.button>
          </div>
        </div>
        <div className="two-content-right">
          <div className="left-fade" />
          <div className="right-fade" />
          <div className="top-fade" />
          <div className="bottom-fade" />
          <div className="two-content-right-content">
            <div className="two-carousel" ref={emblaRef} >
              <div className="two-row">
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo1.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo2.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  <video src="/videos/heavevideo3.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo4.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo5.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
              </div>
            </div>
            <div className="two-carousel" ref={emblaRef2} >
              <div className="two-row">
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo6.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo7.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo8.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo9.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo1.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
              </div>
            </div>
            <div className="two-carousel" ref={emblaRef3} >
              <div className="two-row">
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo5.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo4.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo3.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo2.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
                <div className="two-item" >
                  {/* <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} /> */}
                  <video src="/videos/heavevideo1.mp4" className="two-item-image" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};