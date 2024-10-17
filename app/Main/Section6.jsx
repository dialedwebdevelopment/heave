import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Plus } from "lucide-react";
import { PrevButton, NextButton, usePrevNextButtons} from './Carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section6 = () => {

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
    <section className="six">

      <div className="textbox six-textbox">
        <h1 className="subheadline white" ref={titleRef} >Transforming Simple Ideas into <span className="blue" >Viral Sensations</span></h1>
      </div>

      <div className="six-carousel" ref={emblaRef} >
        <div className="six-row">
          <div className="six-item" ref={cardRef1} >
            <div className="six-item-content"></div>
          </div>
          <div className="six-item" >
            <div className="six-item-content"></div>
          </div>
          <div className="six-item" >
            <div className="six-item-content"></div>
          </div>
          <div className="six-item" >
            <div className="six-item-content"></div>
          </div>
        </div>
      </div>

      <div className="six-carousel-buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

    </section>
  );
};