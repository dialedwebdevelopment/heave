/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import Accordion from "./Accordion";
import Lenis from "lenis";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./section7.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const lenis = useRef(null);
  const titleRef = useRef();
  
  // Content data for accordions and images
  const contentData = [
    {
      imageSrc: "/images/LEFT.jpg",
      title: "Product Highlight",
      content: "We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable."
    },
    {
      imageSrc: "/images/CENTER.jpg",
      title: "Meme Magic",
      content: "This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience."
    },
    {
      imageSrc: "/images/RIGHT.jpg",
      title: "Distribution",
      content: "Finally, we distribute the meme across platforms, leveraging our network of pages with more than 750 million followers to maximize exposure and engagement, ensuring the product goes viral and reaches new audiences."
    }
  ];
  
  // Create refs for each image and accordion
  const imageRefs = Array(contentData.length).fill().map(() => useRef(null));
  const accordionRefs = Array(contentData.length).fill().map(() => useRef(null));

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    lenis.current = new Lenis({
      smooth: true,
      duration: 1.2,
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.current.destroy();
    };
  }, []);

  // Handle accordion toggle and smooth scroll
  const handleAccordionClick = (index) => {
    const isActive = activeIndex === index;
    setActiveIndex(isActive ? null : index);

    if (imageRefs[index]?.current) {
      lenis.current.scrollTo(imageRefs[index].current, {
        duration: 1,
        easing: (t) => t * (2 - t),
        offset: -50,
      });
    }
  };

  // Open accordions when scrolling to corresponding image
  useEffect(() => {
    const handleScroll = () => {
      imageRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    // Title animation
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(
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

    // Image and accordion animations using loops
    imageRefs.forEach(ref => {
      gsap.to(ref.current, {
        opacity: 1,
        duration: 1.25,
        ease: "sine",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%"
        }
      });
    });

    accordionRefs.forEach(ref => {
      gsap.to(ref.current, {
        opacity: 1,
        duration: 1.25,
        ease: "sine",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%"
        }
      });
    });
  }, []);

  return (
    <section className="section seven">
      <div className="seven-content">
        <h1 className="subheadline white" ref={titleRef}>
          Transforming Simple Ideas into <span className="blue">Viral Sensations</span>
        </h1>
        <div className="seven-content-row">
          <div className="seven-content-left">
            {contentData.map((item, index) => (
              <div 
                key={`image-${index}`}
                className="seven-content-left-imagebox opacityanimation" 
                ref={imageRefs[index]} 
                onClick={() => handleAccordionClick(index)}
              >
                <img 
                  src={item.imageSrc} 
                  className="seven-image" 
                  alt={`Image ${index + 1}`} 
                />
              </div>
            ))}
          </div>
          <div className="seven-border"></div>
          <div className="seven-content-right">
            {contentData.map((item, index) => (
              <div 
                key={`accordion-${index}`}
                ref={accordionRefs[index]} 
                className="opacityanimation"
              >
                <Accordion
                  index={index}
                  isActive={activeIndex === index}
                  onToggle={() => handleAccordionClick(index)}
                  title={item.title}
                  content={item.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;