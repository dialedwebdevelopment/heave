/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PrevButton, NextButton, usePrevNextButtons} from './Carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section7Mobile = () => {

    const titleRef = useRef()
    const boxRef1 = useRef()
    const boxRef2 = useRef()
    const boxRef3 = useRef()
    const cardRef1 = useRef()

    // GSAP ANIMATIONS
    useEffect(() => {

        const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
        gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })

        gsap.fromTo(boxRef1.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef1.current, start: "top 95%" } })
        gsap.fromTo(boxRef2.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef2.current, start: "top 95%" } })
        gsap.fromTo(boxRef3.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef3.current, start: "top 95%" } })

        gsap.fromTo(cardRef1.current, { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: cardRef1.current, start: "top 95%" } })

    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true})
    const [scrollProgress, setScrollProgress] = useState(0)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
        if (!emblaApi) return
    
        onScroll(emblaApi)
        emblaApi
          .on('reInit', onScroll)
          .on('scroll', onScroll)
          .on('slideFocus', onScroll)
    }, [emblaApi, onScroll])

  return (
    <section className="section seven-mobile">
        <div className="seven-content">
            <h1 className="subheadline white seven-mobile-subtitle" ref={titleRef} >Transforming Simple Ideas into <span className="blue">Viral Sensations</span></h1>
            {/* <div className="seven-content-column">
                <div className="seven-mobile-item" ref={boxRef1} >
                    <div className="seven-mobile-item-content">
                        <div className="seven-mobile-item-imageframe">
                            <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/LEFT.jpg?v=1730724679942" className="seven-image" alt="Image 1" />
                        </div>
                        <h2 className="small-subheadline white" >Product Highlight</h2>
                        <p className="description white" >We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable.</p>
                    </div>
                </div>
                <div className="seven-mobile-item" ref={boxRef2} >
                    <div className="seven-mobile-item-content">
                        <div className="seven-mobile-item-imageframe">
                            <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/CENTER.jpg?v=1730724689471" className="seven-image" alt="Image 1" />
                        </div>
                        <h2 className="small-subheadline white" >Meme Magic</h2>
                        <p className="description white" >This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience.</p>
                    </div>
                </div>
                <div className="seven-mobile-item" ref={boxRef3} >
                    <div className="seven-mobile-item-content">
                        <div className="seven-mobile-item-imageframe">
                            <img src="https://cdn.glitch.global/fb77b0c4-3062-4970-a03b-49138657d8c7/RIGHT.jpg?v=1730724691853" className="seven-image" alt="Image 1" />
                        </div>
                        <h2 className="small-subheadline white" >Going Viral</h2>
                        <p className="description white" >Finally, we distribute the meme across platforms, leveraging our network of pages with more than 42 million followers to maximize exposure and engagement, ensuring the meme goes viral and reaches its full potential.</p>
                    </div>
                </div>
            </div> */}
            <div ref={cardRef1} >
            <div className="seven-mobile-carousel" ref={emblaRef} >
                <div className="seven-mobile-row">
                    <div className="seven-mobile-item-padding" />
                    <div className="seven-mobile-item" >
                        <div className="seven-mobile-item-content">
                            <div className="seven-mobile-item-imageframe">
                                <img src="/images/LEFT.jpg" className="seven-image" alt="Image 1" />
                            </div>
                            <h2 className="small-subheadline white" >Product Highlight</h2>
                            <p className="description white" >We start by selecting and showcasing the product that will be at the center of the meme. The goal is to position it in a way that resonates with the audience, making it instantly recognizable and relatable.</p>
                        </div>
                    </div>
                    <div className="seven-mobile-item" >
                        <div className="seven-mobile-item-content">
                            <div className="seven-mobile-item-imageframe">
                                <img src="/images/CENTER.jpg" className="seven-image" alt="Image 1" />
                            </div>
                            <h2 className="small-subheadline white" >Meme Magic</h2>
                            <p className="description white" >This is where the magic happens. We craft a clever, engaging, and humorous meme around the product, designed to tap into current trends and cultural moments, ensuring it catches the attention of your target audience.</p>
                        </div>
                    </div>
                    <div className="seven-mobile-item" >
                        <div className="seven-mobile-item-content">
                            <div className="seven-mobile-item-imageframe">
                                <img src="/images/RIGHT.jpg" className="seven-image" alt="Image 1" />
                            </div>
                            <h2 className="small-subheadline white" >Distribution</h2>
                            <p className="description white" >Finally, we distribute the meme across platforms, leveraging our network of pages with more than 750 million followers to maximize exposure and engagement, ensuring the product goes viral and reaches new audiences.</p>
                        </div>
                    </div>
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