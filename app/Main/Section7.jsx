/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import Accordion from "./Accordion"; // Import the Accordion component
import Image from "next/image";
import Lenis from "lenis"; // Import Lenis
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active accordion
  const imageRefs = [useRef(null), useRef(null), useRef(null)]; // Create refs for each image box
  const lenis = useRef(null); // Create a ref to hold Lenis instance
  const accordionRef1 = useRef()
  const accordionRef2 = useRef()
  const accordionRef3 = useRef()

  useEffect(() => {
    // Initialize Lenis instance when component mounts
    lenis.current = new Lenis({
      smooth: true,
      duration: 1.2, // Customize as needed
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis instance when component unmounts
      lenis.current.destroy();
    };
  }, []);

  // Function to handle accordion toggle and smooth scroll to the image box using Lenis
  const handleAccordionClick = (index) => {
    // Check if the clicked accordion is already active
    const isActive = activeIndex === index;
    setActiveIndex(isActive ? null : index); // Toggle accordion open/close

    if (imageRefs[index]?.current) {
      const targetElement = imageRefs[index].current;

      // Use Lenis' scrollTo method for smooth scrolling
      lenis.current.scrollTo(targetElement, {
        duration: 1, // Smooth scroll duration
        easing: (t) => t * (2 - t), // Custom easing function
        offset: -50, // Offset for better alignment (adjust as necessary)
      });
    }
  };

  // Function to open accordions when scrolling to the corresponding image box
  useEffect(() => {
    const handleScroll = () => {
      imageRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Check if the top of the imagebox is visible in the viewport
          if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
            setActiveIndex(index); // Open the corresponding accordion
          }
        }
      });
    };

    // Add the scroll event listener to detect when to open the accordion
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageRefs]);

  // REFS
  const titleRef= useRef()

  // GSAP ANIMATIONS
  useEffect(() => {

    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })

    gsap.fromTo(imageRefs[0].current, { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: imageRefs[0].current, start: "top 95%" } })
    gsap.fromTo(imageRefs[1].current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: imageRefs[1].current, start: "top 95%" } })
    gsap.fromTo(imageRefs[2].current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: imageRefs[2].current, start: "top 95%" } })

    gsap.fromTo(accordionRef1.current, { yPercent: 25, opacity: 0, filter: 'blur(10px)' }, { opacity: 1, yPercent: 0, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: accordionRef1.current, start: "top 95%" } })
    gsap.fromTo(accordionRef2.current, { yPercent: 25, opacity: 0, filter: 'blur(10px)' }, { delay: 0, yPercent: 0, filter: 'blur(0px)', opacity: 1, duration: 0.5, scrollTrigger: { trigger: accordionRef2.current, start: "top 95%" } })
    gsap.fromTo(accordionRef3.current, { yPercent: 25, opacity: 0, filter: 'blur(10px)' }, { delay: 0, yPercent: 0, filter: 'blur(0px)', opacity: 1, duration: 0.5, scrollTrigger: { trigger: accordionRef3.current, start: "top 95%" } })

  }, [])

  return (
    <section className="section seven">
      <div className="seven-content">
        <h1 className="subheadline white" ref={titleRef} >Transforming Simple Ideas into <span className="blue">Viral Sensations</span></h1>
        <div className="seven-content-row">
        <div className="seven-content-left">
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[0]}
            onClick={() => handleAccordionClick(0)}
          >
            <img
              src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/LEFT.jpg?v=1730724679942"
              className="seven-image"
              alt="Image 1"
            />
          </div>
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[1]}
            onClick={() => handleAccordionClick(1)}
          >
            <img
              src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/CENTER.jpg?v=1730724689471"
              className="seven-image"
              alt="Image 2"
            />
          </div>
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[2]}
            onClick={() => handleAccordionClick(2)}
          >
            <img
              src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/RIGHT.jpg?v=1730724691853"
              className="seven-image"
              alt="Image 3"
            />
          </div>
        </div>
        <div className="seven-border"></div>
        <div className="seven-content-right">
          {/* Accordion components */}
          <div ref={accordionRef1} >
          <Accordion
            index={0}
            isActive={activeIndex === 0}
            onToggle={() => handleAccordionClick(0)}
            title="Product Highlight"
            content="We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable."
          />
          </div>
          <div ref={accordionRef2} >
          <Accordion
            index={1}
            isActive={activeIndex === 1}
            onToggle={() => handleAccordionClick(1)}
            title="Meme Magic"
            content="This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience."
          />
          </div>
          <div ref={accordionRef3} >
          <Accordion
            index={2}
            isActive={activeIndex === 2}
            onToggle={() => handleAccordionClick(2)}
            title="Going Viral"
            content="Finally, we distribute the meme across platforms, leveraging our network of pages with more than 42 million followers to maximize exposure and engagement, ensuring the meme goes viral and reaches its full potential."
          />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
