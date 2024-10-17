/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Accordion from "./Accordion";  // Import the Accordion component
import Image from "next/image";

export const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);  // Track the active accordion

  // Function to toggle accordion state
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="section seven">
      <div className="seven-content">
        <div className="seven-content-left">
          <h1 className="subheadline white">
            Transforming Simple Ideas into <span className="blue">Viral Sensations</span>
          </h1>
          <div className="seven-content-left-imagebox">
            <Image src="/images/testimage.PNG" className="eight-card-image-img" width={2000} height={2000} alt="Main Image" />
          </div>
          <div className="seven-content-left-imagebox">
            <Image src="/images/testimage2.PNG" className="eight-card-image-img" width={2000} height={2000} alt="Main Image" />
          </div>
          <div className="seven-content-left-imagebox">
            <Image src="/images/testimage.PNG" className="eight-card-image-img" width={2000} height={2000} alt="Main Image" />
          </div>
        </div>
        <div className="seven-border"></div>
        <div className="seven-content-right">
          {/* Example accordion items */}
          <Accordion
            index={0}
            isActive={activeIndex === 0}
            onToggle={handleToggle}
            title="Product Highlight"
            content="We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable."
          />
          <Accordion
            index={1}
            isActive={activeIndex === 1}
            onToggle={handleToggle}
            title="Meme Magic"
            content="This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience."
          />
          <Accordion
            index={2}
            isActive={activeIndex === 2}
            onToggle={handleToggle}
            title="Going Viral"
            content="Finally, we distribute the meme across platforms, leveraging our network of pages with more than 42 million followers to maximize exposure and engagement, ensuring the meme goes viral and reaches its full potential."
          />
        </div>
      </div>
    </section>
  );
};
