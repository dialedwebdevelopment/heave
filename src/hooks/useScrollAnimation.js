import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (ref, animationConfig) => {
  useEffect(() => {
    if (!ref.current) return;

    const animation = gsap.to(ref.current, {
      ...animationConfig,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
        ...animationConfig.scrollTrigger
      }
    });

    return () => {
      animation.kill();
    };
  }, [ref, animationConfig]);
};