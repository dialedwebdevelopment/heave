/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
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

  // ANIMATIONS
  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })

    gsap.fromTo(cardRef1.current, { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef2.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.25, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef3.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.5, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef4.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.75, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
    gsap.fromTo(cardRef5.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 1, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })
  }, [])

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-57.5%"]);

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
                <Image src="/images/berealu.png" className="five-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef2} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Citizen</h1>
              <div className="five-card-image">
                <Image src="/images/citizenu.png" className="five-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef3} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Hexclad</h1>
              <div className="five-card-image">
                <Image src="/images/hexcladu.png" className="five-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef4} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Jack In The Box</h1>
              <div className="five-card-image">
                <Image src="/images/jackintheboxu.png" className="five-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
          <div className="five-card" ref={cardRef5} >
            <div className="five-card-content">
              <h1 className="small-subheadline white" >Tabs</h1>
              <div className="five-card-image">
                <Image src="/images/tabsu.png" className="five-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="five-content-gradient" />
    </section>
  );
};