/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import Accordion from "./Accordion";  // Import the Accordion component
import Image from "next/image";
import Lenis from "lenis";  // Import Lenis

export const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);  // Track the active accordion
  const imageRefs = [useRef(null), useRef(null), useRef(null)];  // Create refs for each image box
  const lenis = useRef(null);  // Create a ref to hold Lenis instance

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

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the element is visible
      rootMargin: '0px 0px -50% 0px', // Trigger when the top of the image is halfway up the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);  // Set the active index when the image is in view
        }
      });
    }, observerOptions);

    // Observe each image box
    imageRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, [imageRefs]);

  // Function to handle image box click and open the corresponding accordion
  const handleImageClick = (index) => {
    setActiveIndex(index);  // Open the corresponding accordion

    if (imageRefs[index]?.current) {
      const targetElement = imageRefs[index].current;
      // Use Lenis' scrollTo method for smooth scrolling
      lenis.current.scrollTo(targetElement, {
        duration: 1,  // Smooth scroll duration
        easing: (t) => t * (2 - t),
      });
    }
  };

  return (
    <section className="section seven">
      <div className="seven-content">
        <div className="seven-content-left">
          <h1 className="subheadline white">
            Transforming Simple Ideas into <span className="blue">Viral Sensations</span>
          </h1>
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[0]}
            onClick={() => handleImageClick(0)}
          >
            <Image
              src="/images/testimage.PNG"
              className="eight-card-image-img"
              width={2000}
              height={2000}
              alt="Image 1"
            />
          </div>
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[1]}
            onClick={() => handleImageClick(1)}
          >
            <Image
              src="/images/testimage2.PNG"
              className="eight-card-image-img"
              width={2000}
              height={2000}
              alt="Image 2"
            />
          </div>
          <div
            className="seven-content-left-imagebox"
            ref={imageRefs[2]}
            onClick={() => handleImageClick(2)}
          >
            <Image
              src="/images/testimage.PNG"
              className="eight-card-image-img"
              width={2000}
              height={2000}
              alt="Image 3"
            />
          </div>
        </div>
        <div className="seven-border"></div>
        <div className="seven-content-right">
          {/* Example accordion items */}
          <Accordion
            index={0}
            isActive={activeIndex === 0}
            onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
            title="Product Highlight"
            content="We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable."
          />
          <Accordion
            index={1}
            isActive={activeIndex === 1}
            onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
            title="Meme Magic"
            content="This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience."
          />
          <Accordion
            index={2}
            isActive={activeIndex === 2}
            onToggle={() => setActiveIndex(activeIndex === 2 ? null : 2)}
            title="Going Viral"
            content="Finally, we distribute the meme across platforms, leveraging our network of pages with more than 42 million followers to maximize exposure and engagement, ensuring the meme goes viral and reaches its full potential."
          />
        </div>
      </div>
    </section>
  );
};



