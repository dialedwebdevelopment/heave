/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useTransform, useScroll } from "framer-motion";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section5 = () => {

  // REFS
  const titleRef = useRef()
  const cardRef1 = useRef()
  const cardRef2 = useRef()
  const cardRef3 = useRef()
  const cardRef4 = useRef()
  const cardRef5 = useRef()
  const cardRef6 = useRef()

  // ANIMATIONS
  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })

    gsap.fromTo(cardRef1.current, { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef2.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.25, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef3.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.5, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef4.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.75, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef5.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 1, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef6.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 1.25, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
  }, [])

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-64.25%"]);

  return (
    <section ref={targetRef} className="five">
      <div className="five-sticky">
        <div className="five-sticky-text-contents">
          <h1 className="subheadline white" ref={titleRef} >Some of the <span className="blue" >brands we've worked with</span></h1>
        </div>
        <motion.div style={{ x }} className="five-sticky-content">
          <div className="five-card-invisible" />
          <div className="five-card" ref={cardRef1} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >BeReal</h1>
              <div className="five-card-image">
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/casestudy2.webp?v=1731068630056" className="five-card-image-img" alt="Main Image" />
              </div>
              <p className="description white" >BeReal, the social media app that encourages authenticity, wanted to engage young audiences and spark conversations around real, unfiltered moments. They challenged us to create content that would increase brand awareness and fuel organic word-of-mouth.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef2} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Citizen</h1>
              <div className="five-card-image">
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/casestudy3.webp?v=1731068632611" className="five-card-image-img" alt="Main Image" />
              </div>
              <p className="description white" >Citizen, a US-only live-time safety app, wanted to leverage a campaign to add more gen-z users on their platform. We combined Citizen’s safety appeal with humor on X (Twitter), effectively boosting brand awareness and app downloads in a tangible, measurable way.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef3} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Hexclad</h1>
              <div className="five-card-image">
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/casestudy4.webp?v=1731068635004" className="five-card-image-img" alt="Main Image" />
              </div>
              <p className="description white" >HexClad, a leading high-quality cookware brand, wanted to connect with Gen Z audiences online in a relatable and viral way. Heave orchestrated the development and dissemination of inventive memes that engaged millions into a topic as ordinary as cooking pots and pans.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef4} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Jack In The Box</h1>
              <div className="five-card-image">
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/casestudy5.webp?v=1731068638414" className="five-card-image-img" alt="Main Image" />
              </div>
              <p className="description white" >Jack in the Box, a large US fast food chain, wished to increase awareness of their promotion on Saint Patrick’s Day. We swiftly created and distributed content promoting Jack in the Box’s holiday offer all in one day.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef5} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Tabs</h1>
              <div className="five-card-image">
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/casestudy6.webp?v=1731068641659" className="five-card-image-img" alt="Main Image" />
              </div>
              <p className="description white" >Tabs Chocolate, a DTC e-commerce store selling chocolate, struggled with revenue growth, having only focused on one single marketing channel. Heave helped Tabs scale their revenue from five to six figures per month through a consistent and coordinated flurry of memes, influencers, and organic content.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef6} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Baked Bags</h1>
              <div className="five-card-image">
                <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/casestudy1.webp?v=1731068625703" className="five-card-image-img" alt="Main Image" />
              </div>
              <p className="description white" >Baked Bags, a CPG snack company, aimed to grow sales of its trendy infused-waffle cone snack through its online store. Heave boosted Baked Bags’ online sales and social presence with clever organic content.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="five-content-gradient" />
    </section>
  );
};