import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useParallaxScroll = (
  elements,
  {
    trigger = null,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
  } = {}
) => {
  useEffect(() => {
    const animations = elements
      .filter(({ ref }) => ref.current)
      .map(({ ref, yPercent = 0, xPercent = 0 }) => {
        return gsap.fromTo(
          ref.current,
          { yPercent: 0, xPercent: 0 },
          {
            yPercent,
            xPercent,
            scrollTrigger: {
              trigger: trigger || ref.current,
              start,
              end,
              scrub
            }
          }
        );
      });

    return () => {
      animations.forEach(animation => animation.kill());
    };
  }, [elements, trigger, start, end, scrub]);
};

export default useParallaxScroll;