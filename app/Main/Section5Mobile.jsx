import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PrevButton, NextButton, usePrevNextButtons} from './Carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import "./section5.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

// Brand data centralized for easier maintenance
const brandData = [
  {
    name: "BeReal",
    image: "/images/berealo.webp",
    description: "BeReal, the social media app that encourages authenticity, wanted to engage young audiences and spark conversations around real, unfiltered moments. They challenged us to create content that would increase brand awareness and fuel organic word-of-mouth."
  },
  {
    name: "Citizen",
    image: "/images/citizeno.webp",
    description: "Citizen, a live-time safety app, wanted to leverage a campaign to add more gen-z users on their platform. We combined Citizen's safety appeal with humor on X, effectively boosting brand awareness and app downloads in a tangible, measurable way."
  },
  {
    name: "Hexclad",
    image: "/images/hexclado.webp",
    description: "HexClad, a top cookware brand, wanted to connect with Gen Z audiences online in a relatable and viral way. Heave orchestrated the development and dissemination of inventive memes that engaged millions into a topic as ordinary as cooking pots and pans."
  },
  {
    name: "Jack In The Box",
    image: "/images/jackintheboxo.webp",
    description: "Jack in the Box, a large US fast food chain, wished to increase awareness of their promotion on Saint Patrick's Day. We swiftly created and distributed content promoting Jack in the Box's holiday offer all in one day."
  },
  {
    name: "Tabs",
    image: "/images/tabso.webp",
    description: "Tabs Chocolate, a DTC e-commerce store, struggled with revenue growth, relying on just one marketing channel. Heave helped Tabs scale their revenue from five to seven figures per month through a consistent and coordinated flurry of memes, and organic content."
  },
  {
    name: "Baked Bags",
    image: "/images/casestudy1.webp",
    description: "Baked Bags, a CPG snack company, aimed to grow sales of its trendy infused-waffle cone snack through its online store. Heave boosted Baked Bags' online sales and social presence with clever organic content."
  }
];

const Section5Mobile = () => {
  // REFS
  const titleRef = useRef();
  const cardRef = useRef();

  // CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1, 
    watchDrag: true, 
    loop: true 
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  // GSAP ANIMATIONS
  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    
    gsap.fromTo( titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    gsap.to( cardRef.current, { opacity: 1, duration: 1.25, ease: "sine", scrollTrigger: { trigger: cardRef.current, start: "top 95%" } } );
    
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
      
    return () => {
      // Cleanup event listeners when component unmounts
      emblaApi
    };
  }, [emblaApi]);

  return (
    <section className="five-mobile">
      <div className="textbox five-mobile-textbox">
        <h1 className="subheadline white" ref={titleRef}>
          Some of the <span className="blue">brands</span> we&apos;ve worked with
        </h1>
      </div>

      <div className="opacityanimation" ref={cardRef}>
        <div className="five-mobile-carousel" ref={emblaRef}>
          <div className="five-mobile-row">
            {brandData.map((brand, index) => (
              <div className="five-mobile-item" key={index}>
                <div className="five-mobile-item-content">
                  <h1 className="small-subheadline white">{brand.name}</h1>
                  <div className="five-card-image">
                    <img 
                      src={brand.image} 
                      className="five-card-image-img" 
                      alt={`${brand.name} Case Study`} 
                    />
                  </div>
                  <p className="description white">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="five-mobile-carousel-buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default Section5Mobile;