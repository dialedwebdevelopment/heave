import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const usePlaneAnimations = () => {
  const planeRef1 = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)"
      }, (context) => {
        const { isDesktop } = context.conditions;

        gsap.fromTo(planeRef1.current, 
          { 
            y: isDesktop ? "-10vh" : "40vh", 
            x: isDesktop ? "-10vw" : "-50vw" 
          }, 
          { 
            y: "110vh", 
            x: isDesktop ? "110vw" : "150vw", 
            scrollTrigger: { 
              trigger: ".two", 
              start: "top bottom", 
              end: "bottom top", 
              scrub: 1 
            }
          }
        );

        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      });

      return () => {
        mm.revert();
      };
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return {
    planeRef1
  };
};

export default usePlaneAnimations;