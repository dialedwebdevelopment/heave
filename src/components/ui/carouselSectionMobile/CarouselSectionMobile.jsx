import React, { useRef, useMemo, forwardRef } from "react";
import { PrevButton, NextButton, usePrevNextButtons} from '@/components/ui/carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import BrandCard from '@/components/ui/BrandCard';
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';
import "@/components/sections/section5/section5.css";

const CarouselSectionMobile = forwardRef(({ title, items = [], className = "", id, imageClassName = "" }, ref) => {
  const titleRef = useRef();
  const cardRef = useRef();

  const emblaOptions = useMemo(() => ({ 
    slidesToScroll: 1, 
    watchDrag: true, 
    loop: true 
  }), []);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  useSplitTextAnimation(titleRef);
  useFadeInOnScroll(cardRef);

  return (
    <section className="five-mobile" id={id}>
      <div className="textbox five-mobile-textbox">
        <h1 className="subheadline white" ref={titleRef}>
          {title}
        </h1>
      </div>

      <div className="opacityanimation" ref={cardRef}>
        <div className="five-mobile-carousel" ref={emblaRef}>
          <div className="five-mobile-row">
            {items.map((item, index) => (
              <div className="five-mobile-item" key={index}>
                <BrandCard 
                  brand={{
                    ...item,
                    image: item.imageMobile || item.image
                  }} 
                  variant="mobile" 
                  imageClassName={imageClassName}
                />
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
});

CarouselSectionMobile.displayName = 'CarouselSectionMobile';

export default CarouselSectionMobile;