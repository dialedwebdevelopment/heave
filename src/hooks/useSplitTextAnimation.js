import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const useSplitTextAnimation = (
  ref,
  {
    type = 'words',
    fromVars = { opacity: 0 },
    toVars = {
      opacity: 1,
      stagger: 0.05,
      duration: 1,
    },
    scrollTrigger = {
      start: "top 95%"
    },
    delay = 0,
  } = {}
) => {
  const hasAnimatedRef = useRef(false);
  const animationRef = useRef(null);
  const splitTextRef = useRef(null);

  useEffect(() => {
    if (!ref.current || hasAnimatedRef.current) return;

    splitTextRef.current = new SplitText(ref.current, { type });
    
    animationRef.current = gsap.fromTo(
      splitTextRef.current[type],
      fromVars,
      {
        ...toVars,
        delay,
        scrollTrigger: scrollTrigger ? {
          trigger: ref.current,
          ...scrollTrigger,
          onComplete: () => {
            hasAnimatedRef.current = true;
          }
        } : undefined,
        onComplete: () => {
          if (!scrollTrigger) {
            hasAnimatedRef.current = true;
          }
        }
      }
    );

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
      hasAnimatedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useSplitTextAnimation;