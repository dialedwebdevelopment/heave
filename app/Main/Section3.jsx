/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section3 = () => {

  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef()
  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()
  const floatingBoxRef1 = useRef();
  const floatingBoxRef2 = useRef();
  const floatingBoxRef3 = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set the width threshold for mobile
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const titleSplitText = new SplitText(textRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0, }, { opacity: 1, stagger: 0.01, scrollTrigger: { trigger: ".three-content", start: "top bottom", end: "center 50%", scrub: true } })
    gsap.fromTo(imageRef1.current, { opacity: 0, }, { opacity: 1, scrollTrigger: { trigger: imageRef1.current, start: "top 97.5%", end: "center center", scrub: true } })
    gsap.fromTo(imageRef2.current, { opacity: 0, }, { opacity: 1, scrollTrigger: { trigger: imageRef2.current, start: "top 97.5%", end: "center center", scrub: true } })
    gsap.fromTo(imageRef3.current, { opacity: 0, }, { opacity: 1, scrollTrigger: { trigger: imageRef3.current, start: "top 97.5%", end: "center center", scrub: true } })
  }, [])

  // CARDS MOUSE ANIMATION
  useEffect(() => {
    if (window.innerWidth > 768) {
      let mouseX = 0;
      let mouseY = 0;
  
      let box1X = 0;
      let box1Y = 0;
      let box2X = 0;
      let box2Y = 0;
      let box3X = 0;
      let box3Y = 0;
  
      const speed = 0.05; // Decrease this value for slower, more noticeable easing
  
      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 100 - 50;
        mouseY = (event.clientY / window.innerHeight) * 100 - 50;
      };
  
      const animate = () => {
        // Box 1 movement
        const distX1 = (mouseX * -0.25) - box1X;
        const distY1 = (mouseY * -0.25) - box1Y;
        box1X += distX1 * speed;
        box1Y += distY1 * speed;
  
        // Box 2 movement
        const distX2 = (mouseX * 0.25) - box2X;
        const distY2 = (mouseY * 0.25) - box2Y;
        box2X += distX2 * speed;
        box2Y += distY2 * speed;
  
        // Box 3 movement
        const distX3 = (mouseX * -0.5) - box3X;
        const distY3 = (mouseY * -0.5) - box3Y;
        box3X += distX3 * speed;
        box3Y += distY3 * speed;
  
        // Apply the calculated transforms
        if (imageRef1.current) {
          imageRef1.current.style.transform = `translate(${box1X}px, ${box1Y}px)`;
        }
        if (imageRef2.current) {
          imageRef2.current.style.transform = `translate(${box2X}px, ${box2Y}px)`;
        }
        if (imageRef3.current) {
          imageRef3.current.style.transform = `translate(${box3X}px, ${box3Y}px)`;
        }
  
        requestAnimationFrame(animate); // Continue the animation loop
      };
  
      animate();
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section className="section three">
      <div className="three-content">
        <h1 className="subheadline three-subheadline white" ref={textRef} >We don’t just create campaigns, we <span className="blue" > ignite {!isMobile && <br />} movements</span>. <Image src="/images/heavetest.png" className="three-image three-image-1" ref={imageRef1} width={500} height={500} alt="alt" /> Leveraging our <span className="blue" >vast network</span> <Image src="/images/heavetest2.png" className="three-image three-image-2" ref={imageRef2} width={500} height={500} alt="alt" /> of influencers and digital platforms, we elevate your brand from concept to<span className="blue" > viral success</span>, <Image src="/images/heavetest3.png" className="three-image three-image-3" ref={imageRef3} width={500} height={500} alt="alt" /> keeping your audience captivated and engaged.</h1>
      </div>
      <div className="section-border"></div>
    </section>
  );
};