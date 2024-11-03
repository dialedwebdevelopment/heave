/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import Accordion from "./Accordion"; // Import the Accordion component
import Image from "next/image";
import Lenis from "lenis"; // Import Lenis
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section7Mobile = () => {

    const titleRef = useRef()
    const boxRef1 = useRef()
    const boxRef2 = useRef()
    const boxRef3 = useRef()

    // GSAP ANIMATIONS
    useEffect(() => {

        const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
        gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })

        gsap.fromTo(boxRef1.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef1.current, start: "top 75%" } })
        gsap.fromTo(boxRef2.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef2.current, start: "top 75%" } })
        gsap.fromTo(boxRef3.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef3.current, start: "top 75%" } })

    }, [])

  return (
    <section className="section seven-mobile">
        <div className="seven-content">
            <h1 className="subheadline white seven-mobile-subtitle" ref={titleRef} >Transforming Simple Ideas into <span className="blue">Viral Sensations</span></h1>
            <div className="seven-content-column">
                <div className="seven-mobile-item" ref={boxRef1} >
                    <div className="seven-mobile-item-content">
                        <div className="seven-mobile-item-imageframe">
                            <Image src="/images/LEFT.jpg" className="seven-image" width={2000} height={2000} alt="Image 1" />
                        </div>
                        <h2 className="small-subheadline white" >Product Highlight</h2>
                        <p className="description white" >We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable.</p>
                    </div>
                </div>
                <div className="seven-mobile-item" ref={boxRef2} >
                    <div className="seven-mobile-item-content">
                        <div className="seven-mobile-item-imageframe">
                            <Image src="/images/CENTER.jpg" className="seven-image" width={2000} height={2000} alt="Image 1" />
                        </div>
                        <h2 className="small-subheadline white" >Meme Magic</h2>
                        <p className="description white" >This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience.</p>
                    </div>
                </div>
                <div className="seven-mobile-item" ref={boxRef3} >
                    <div className="seven-mobile-item-content">
                        <div className="seven-mobile-item-imageframe">
                            <Image src="/images/RIGHT.jpg" className="seven-image" width={2000} height={2000} alt="Image 1" />
                        </div>
                        <h2 className="small-subheadline white" >Going Viral</h2>
                        <p className="description white" >Finally, we distribute the meme across platforms, leveraging our network of pages with more than 42 million followers to maximize exposure and engagement, ensuring the meme goes viral and reaches its full potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};