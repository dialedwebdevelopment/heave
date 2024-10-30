/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect, useMemo } from "react";
import Accordion from "./Accordion"; // Import the Accordion component
import Image from "next/image";
import Lenis from "lenis"; // Import Lenis

export const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active accordion
  const imageRefs = useMemo(() => [useRef(null), useRef(null), useRef(null)], []);
  const lenis = useRef(null); // Create a ref to hold Lenis instance

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

  return (
    <section className="section seven">
      <div className="seven-content">
        <h1 className="subheadline white">Transforming Simple Ideas into <span className="blue">Viral Sensations</span></h1>
        <div className="seven-content-row">
        <div className="seven-content-left">
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[0]}
            onClick={() => handleAccordionClick(0)}
          >
            <Image
              src="/images/LEFT.jpg"
              className="seven-image"
              width={2000}
              height={2000}
              alt="Image 1"
            />
          </div>
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[1]}
            onClick={() => handleAccordionClick(1)}
          >
            <Image
              src="/images/CENTER.jpg"
              className="seven-image"
              width={2000}
              height={2000}
              alt="Image 2"
            />
          </div>
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[2]}
            onClick={() => handleAccordionClick(2)}
          >
            <Image
              src="/images/RIGHT.jpg"
              className="seven-image"
              width={2000}
              height={2000}
              alt="Image 3"
            />
          </div>
        </div>
        <div className="seven-border"></div>
        <div className="seven-content-right">
          {/* Accordion components */}
          <Accordion
            index={0}
            isActive={activeIndex === 0}
            onToggle={() => handleAccordionClick(0)}
            title="Product Highlight"
            content="We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable."
          />
          <Accordion
            index={1}
            isActive={activeIndex === 1}
            onToggle={() => handleAccordionClick(1)}
            title="Meme Magic"
            content="This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience."
          />
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
    </section>
  );
};
