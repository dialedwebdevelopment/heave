/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PrevButton, NextButton, usePrevNextButtons } from './Carousel/EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import "./section7.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section7Mobile = () => {
  const titleRef = useRef();
  const cardRef = useRef();
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Carousel content data
  const carouselItems = [
    {
      image: "/images/LEFT.jpg",
      title: "Product Highlight",
      description: "We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable."
    },
    {
      image: "/images/CENTER.jpg",
      title: "Meme Magic",
      description: "This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience."
    },
    {
      image: "/images/RIGHT.jpg",
      title: "Distribution",
      description: "Finally, we distribute the meme across platforms, leveraging our network of pages with more than 750 million followers to maximize exposure and engagement, ensuring the product goes viral and reaches new audiences."
    }
  ];

  // GSAP animations
  useEffect(() => {
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

    gsap.to(
      cardRef.current, 
      { 
        opacity: 1, 
        duration: 1.25, 
        ease: "sine", 
        scrollTrigger: { 
          trigger: cardRef.current, 
          start: "top 95%" 
        } 
      }
    );
  }, []);

  // Carousel navigation
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  // Scroll progress tracking
  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll);
      
    return () => {
      // Cleanup event listeners
      emblaApi
        .off('reInit', onScroll)
        .off('scroll', onScroll)
        .off('slideFocus', onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <section className="section seven-mobile">
      <div className="seven-content">
        <h1 className="subheadline white seven-mobile-subtitle" ref={titleRef}>
          Transforming Simple Ideas into <span className="blue">Viral Sensations</span>
        </h1>
        
        <div ref={cardRef} className="opacityanimation">
          <div className="seven-mobile-carousel" ref={emblaRef}>
            <div className="seven-mobile-row">
              <div className="seven-mobile-item-padding" />
              
              {carouselItems.map((item, index) => (
                <div className="seven-mobile-item" key={`carousel-item-${index}`}>
                  <div className="seven-mobile-item-content">
                    <div className="seven-mobile-item-imageframe">
                      <img 
                        src={item.image} 
                        className="seven-image" 
                        alt={`${item.title} image`}
                      />
                    </div>
                    <h2 className="small-subheadline white">{item.title}</h2>
                    <p className="description white">{item.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="seven-mobile-item-padding" />
            </div>
          </div>
        </div>

        <div className="seven-mobile-bottom">
          <div className="seven-mobile-bottom-buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
          <div className="embla__progress">
            <div
              className="embla__progress__bar"
              style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7Mobile;