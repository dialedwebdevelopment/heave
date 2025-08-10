import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./section1.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section1 = () => {

  const [textAnimationTrigger, setTextAnimationTrigger] = useState(false);

  const titleRef = useRef()
  const boxTextRef = useRef()
  const nullRef = useRef()

  const imageRef1 = useRef()
  const imageRef2 = useRef()
  const imageRef3 = useRef()
  const imageRef4 = useRef()
  
  const imageData = useMemo(() => [
    { ref: imageRef1, path: "/images/main1.webp", yPercent: -5 },
    { ref: imageRef2, path: "/images/main3.webp", yPercent: 5 },
    { ref: imageRef3, path: "/images/main2.webp", yPercent: 0 },
    { ref: imageRef4, path: "/images/main4.webp", yPercent: 15 }
  ], []);

  useEffect(() => {
    let titleDelay, boxTextDelay, nullDelay;
    
    if (sessionStorage.getItem('animationHeroSeen')) {
      titleDelay = 0.25;
      boxTextDelay = 0.75;
      nullDelay = 0.1;
    } else {
      titleDelay = 4.25;
      boxTextDelay = 4.75;
      nullDelay = 3;
      
      sessionStorage.setItem('animationHeroSeen', 'true');
    }

    const split = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: titleDelay, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    const boxTextRefSplit = new SplitText(boxTextRef.current, { type: "chars" });
    gsap.fromTo(boxTextRefSplit.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { delay: boxTextDelay, ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065 });
    gsap.fromTo(nullRef.current, { opacity: 0 }, { delay: nullDelay, opacity: 1, duration: 1, onComplete: () => setTextAnimationTrigger(true) });

    imageData.forEach(image => {
      gsap.fromTo(
        image.ref.current, 
        { yPercent: 0 }, 
        { 
          yPercent: image.yPercent, 
          scrollTrigger: { 
            trigger: ".one-image-trigger", 
            start: "top bottom", 
            end: "bottom top", 
            scrub: true 
          } 
        }
      );
    });
  }, [imageData])

  return (
    <section id="section1" className="section one">
      <div className="one-content">
        <div className="one-content-textbox">
          <h1 className="headline one-headline" ref={titleRef} >We Create</h1>
          <div className={`one-item-changing-text ${textAnimationTrigger ? "one-item-changing-text-animate" : ""}`}>
            <span className="one-item-changing-text-1" ><h1 className="headline blue" ref={boxTextRef} >Brands.</h1></span>
            <span className="one-item-changing-text-2">Shows.</span>
            <span className="one-item-changing-text-3">Content.</span>
            <span className="one-item-changing-text-4">Trends.</span>
          </div>
        </div>
      </div>
      <div className="one-image">
        {imageData.map((image, index) => (
          <Image 
            key={index}
            src={image.path} 
            width={700} 
            height={700} 
            className="one-image-img" 
            ref={image.ref} 
            alt={`Main Image ${index + 1}`} 
          />
        ))}
      </div>
      <div className="one-gradient-background" />
      <div className="one-image-trigger"></div>
    </section>
  );
};

export default Section1;