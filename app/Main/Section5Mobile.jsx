import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Plus } from "lucide-react";
import { PrevButton, NextButton, usePrevNextButtons} from './Carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section5Mobile = () => {

  // REFS
  const titleRef= useRef()
  const cardRef1 = useRef()

  // GSAP ANIMATIONS
  useEffect(() => {

    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })

    gsap.fromTo(cardRef1.current, { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })

  }, [])

  // CAROUSEL
  const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max)

  const TWEEN_FACTOR_BASE = 0.5

  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, watchDrag: true, loop: true })

  const tweenFactor = useRef(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, setTweenFactor, tweenOpacity])

  return (
    <section className="five-mobile">

      <div className="textbox five-mobile-textbox">
        <h1 className="subheadline white" ref={titleRef} >Some of the <span className="blue" >brands</span> we&apos;ve worked with</h1>
      </div>

      <div ref={cardRef1} >
      <div className="five-mobile-carousel" ref={emblaRef} >
        <div className="five-mobile-row">
          <div className="five-mobile-item" >
            <div className="five-mobile-item-content">
                <h1 className="small-subheadline white" >BeReal</h1>
                <div className="five-card-image">
                  <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/berealo.webp?v=1730723858257" className="five-card-image-img" alt="Main Image" />
                </div>
                <p className="description white" >BeReal, the social media app that encourages authenticity, wanted to engage young audiences and spark conversations around real, unfiltered moments. They challenged us to create content that would increase brand awareness and fuel organic word-of-mouth.</p>
            </div>
          </div>
          <div className="five-mobile-item" >
            <div className="five-mobile-item-content">
                <h1 className="small-subheadline white" >Citizen</h1>
                <div className="five-card-image">
                  <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/citizeno.webp?v=1730723928778" className="five-card-image-img" alt="Main Image" />
                </div>
                <p className="description white" >Citizen, a US-only live-time safety app, wanted to leverage a campaign to add more gen-z users on their platform. We combined Citizen’s safety appeal with humor on X (Twitter), effectively boosting brand awareness and app downloads in a tangible, measurable way.</p>
            </div>
          </div>
          <div className="five-mobile-item" >
            <div className="five-mobile-item-content">
                <h1 className="small-subheadline white" >Hexclad</h1>
                <div className="five-card-image">
                  <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/hexclado.webp?v=1730724122212" className="five-card-image-img" alt="Main Image" />
                </div>
                <p className="description white" >HexClad, a leading high-quality cookware brand, wanted to connect with Gen Z audiences online in a relatable and viral way. Heave orchestrated the development and dissemination of inventive memes that engaged millions into a topic as ordinary as cooking pots and pans.</p>
            </div>
          </div>
          <div className="five-mobile-item" >
            <div className="five-mobile-item-content">
                <h1 className="small-subheadline white" >Jack In The Box</h1>
                <div className="five-card-image">
                  <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/jackintheboxo.webp?v=1730724191639" className="five-card-image-img" alt="Main Image" />
                </div>
                <p className="description white" >Jack in the Box, a large US fast food chain, wished to increase awareness of their promotion on Saint Patrick’s Day. We swiftly created and distributed content promoting Jack in the Box’s holiday offer all in one day.</p>
            </div>
          </div>
          <div className="five-mobile-item" >
            <div className="five-mobile-item-content">
                <h1 className="small-subheadline white" >Tabs</h1>
                <div className="five-card-image">
                  <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/tabso.webp?v=1730724243790" className="five-card-image-img" alt="Main Image" />
                </div>
                <p className="description white" >Tabs Chocolate, a DTC e-commerce store selling chocolate, struggled with revenue growth, having only focused on one single marketing channel. Heave helped Tabs scale their revenue from five to six figures per month through a consistent and coordinated flurry of memes, influencers, and organic content.</p>
            </div>
          </div>
          <div className="five-mobile-item" >
            <div className="five-mobile-item-content">
                <h1 className="small-subheadline white" >Baked Bags</h1>
                <div className="five-card-image">
                  <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/casestudy1.webp?v=1731068625703" className="five-card-image-img" alt="Main Image" />
                </div>
                <p className="description white" >Baked Bags, a CPG snack company, aimed to grow sales of its trendy infused-waffle cone snack through its online store. Heave boosted Baked Bags’ online sales and social presence with clever organic content.</p>
            </div>
          </div>
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