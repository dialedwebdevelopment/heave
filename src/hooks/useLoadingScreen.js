import { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

const useLoadingScreen = () => {
  const sectionRef = useRef();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);

  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  useLayoutEffect(() => {
    if (lenis) {
      lenis.stop();
    }
  }, [lenis]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    let loadingScreenDelay;
    
    if (sessionStorage.getItem('animationLoadingScreenSeen')) {
      loadingScreenDelay = 0.25;
    } else {
      loadingScreenDelay = 4;
      sessionStorage.setItem('animationLoadingScreenSeen', 'true');
    }
    
    const animation = gsap.fromTo(sectionRef.current, 
      { opacity: 1 }, 
      { 
        opacity: 0, 
        pointerEvents: "none", 
        duration: 0.5, 
        delay: loadingScreenDelay, 
        onComplete: () => {
          if (sectionRef.current) {
            sectionRef.current.style.display = "none";
          }
          if (lenisRef.current) {
            lenisRef.current.start();
          }
        } 
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return { sectionRef };
};

export default useLoadingScreen;