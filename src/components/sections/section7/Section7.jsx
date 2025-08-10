import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./section7.css";
import CircleButton from "@/components/ui/circleButton/CircleButton";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Section7 = () => {
  const buttonRef = useRef();
  const logoRef = useRef();
  const textRef = useRef();
  const imageBackgroundRef = useRef();

  useEffect(() => {
    const animations = [];

    if (logoRef.current) {
      animations.push(
        gsap.to(logoRef.current, {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 95%"
          }
        })
      );
    }

    if (textRef.current) {
      const splitText = new SplitText(textRef.current, { type: "words" });
      animations.push(
        gsap.fromTo(
          splitText.words,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 95%"
            }
          }
        )
      );
    }

    if (buttonRef.current) {
      animations.push(
        gsap.to(buttonRef.current, {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 95%"
          }
        })
      );
    }

    if (imageBackgroundRef.current) {
      animations.push(
        gsap.to(imageBackgroundRef.current, {
          duration: 4,
          ease: "none",
          repeat: -1,
          onUpdate: () => {
            const timeOffset = 0;
            const randomX = Math.sin((Date.now() + timeOffset) / 1000) * 60;
            const randomY = Math.cos((Date.now() + timeOffset) / 1000) * 60;
            gsap.set(imageBackgroundRef.current, {
              x: randomX,
              y: randomY,
            });
          }
        })
      );
    }

    return () => {
      animations.forEach(anim => anim.kill());
    };
  }, []);
  return (
    <section id="section7" className="section-seven">
      <div className="section-seven-background" />
      <div className="section-seven-content" >
        <div className="section-seven-left" >
          <div className="section-seven-textbox" >
            <Image ref={logoRef} src="/brand/sync.svg" className="section-seven-logo opacityanimation" alt="Sync Logo" width={200} height={80} />
            <p ref={textRef} className="description white" >Launch fixed campaigns or pay creators per <br /> view—all while managing content, tracking <br /> performance, and scaling with ease.</p>
            <CircleButton
              ref={buttonRef}
              text="Get Started Today"
              className="section-seven-button"
              onClick={() => window.open('https://makeitsync.com/', '_blank')}
            />
          </div>
        </div>
        <div className="section-seven-right" >
          <div ref={imageBackgroundRef} className="section-seven-image-background" />
          <Image src="/images/mockup.webp" alt="" width={2000} height={2000} className="section-seven-image" />
        </div>
      </div>
      <div className="section-border" />
    </section>
  );
};

export default Section7;