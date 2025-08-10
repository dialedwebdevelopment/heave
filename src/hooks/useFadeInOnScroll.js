import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInOnScroll = (
  refs,
  {
    duration = 1.25,
    ease = "sine",
    stagger = 0,
    start = "top 95%",
    delay = 0,
    scrollTrigger = {},
  } = {}
) => {
  useEffect(() => {
    const refsArray = Array.isArray(refs) ? refs : [refs];
    const elements = refsArray
      .map(ref => ref.current)
      .filter(Boolean);

    if (elements.length === 0) return;

    const animations = elements.map((element, index) => {
      return gsap.to(element, {
        opacity: 1,
        duration,
        ease,
        delay: delay + (stagger * index),
        scrollTrigger: {
          trigger: element,
          start,
          ...scrollTrigger
        }
      });
    });

    return () => {
      animations.forEach(animation => animation.kill());
    };
  }, [refs, start, duration, ease, stagger, delay, scrollTrigger]);
};

export default useFadeInOnScroll;