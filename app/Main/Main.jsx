"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { vec2 } from "vecteur";
import { ReactLenis, useLenis } from 'lenis/react'
import { Section1 } from "./Section1";
import "./main.css";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { SectionFooter } from "./SectionFooter";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import Model from "./Plane3D/Model";
import { Section9 } from "./section9";
import { Section5Mobile } from "./Section5Mobile";
import { Section7Mobile } from "./Section7Mobile";
import { Section9Mobile } from "./Section9Mobile";
import { Section8Mobile } from "./Section8Mobile";

const Main = () => {

  const sectionRef = useRef()

  useLayoutEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 1 }, { opacity: 0, pointerEvents: "none", duration: 0.5, delay: 4, onComplete: () => {sectionRef.current.style.display = "none";} })
  }, [])

  // LENIS

  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
  }, [lenis]);

  useEffect(() => {
    setTimeout(() => {
      lenis?.start();
    }, 4000);
  }, [lenis]);

  useEffect(() => {
    // if (window.innerWidth > 768) {
    class Cursor {
      constructor(targetEl) {
        this.el = targetEl;
    
        this.position = {
          previous: vec2(-100, -100),
          current: vec2(-100, -100),
          target: vec2(-100, -100),
          lerpAmount: 0.1
        };
        this.scale = {
          previous: 1,
          current: 1,
          target: 1,
          lerpAmount: 0.1
        };
    
        this.isHovered = false;
        this.hoverEl = null;
    
        this.addListeners();
      }
    
      update() {
        this.position.current.lerp(this.position.target, this.position.lerpAmount);
        this.scale.current = gsap.utils.interpolate(
          this.scale.current,
          this.scale.target,
          this.scale.lerpAmount
        );
    
        const delta = this.position.current.clone().sub(this.position.previous);
    
        this.position.previous.copy(this.position.current);
        this.scale.previous = this.scale.current;
    
        gsap.set(this.el, {
          x: this.position.current.x,
          y: this.position.current.y
        });
    
        if (!this.isHovered) {
          const angle = Math.atan2(delta.y, delta.x) * (180 / Math.PI);
          const distance = Math.sqrt(delta.x * delta.x + delta.y * delta.y) * 0.04;
    
          gsap.set(this.el, {
            rotate: angle,
            scaleX: this.scale.current + Math.min(distance, 1),
            scaleY: this.scale.current - Math.min(distance, 0.3)
          });
        }
      }
    
      updateTargetPosition(x, y) {
        if (this.isHovered) {
          const bounds = this.hoverEl.getBoundingClientRect();
    
          const cx = bounds.x + bounds.width / 2;
          const cy = bounds.y + bounds.height / 2;
    
          const dx = x - cx;
          const dy = y - cy;
    
          this.position.target.x = cx + dx * 0.15;
          this.position.target.y = cy + dy * 0.15;
          this.scale.target = 2;
    
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          const distance = Math.sqrt(dx * dx + dy * dy) * 0.01;
    
          gsap.set(this.el, { rotate: angle });
          gsap.to(this.el, {
            scaleX: this.scale.target + Math.pow(Math.min(distance, 0.6), 3) * 3,
            scaleY: this.scale.target - Math.pow(Math.min(distance, 0.3), 3) * 3,
            duration: 0.5,
            ease: "power4.out",
            overwrite: true
          });
        } else {
          this.position.target.x = x;
          this.position.target.y = y;
          this.scale.target = 1;
        }
      }
    
      addListeners() {
        gsap.utils.toArray("[data-hover]").forEach((hoverEl) => {
          // set hover states
          {
            const hoverBoundsEl = hoverEl.querySelector("[data-hover-bounds]");
            hoverBoundsEl.addEventListener("pointerover", () => {
              this.isHovered = true;
              this.hoverEl = hoverBoundsEl;
            });
            hoverBoundsEl.addEventListener("pointerout", () => {
              this.isHovered = false;
              this.hoverEl = null;
            });
          }
    
          // magnetic effect
          {
            const xTo = gsap.quickTo(hoverEl, "x", {
              duration: 1,
              ease: "elastic.out(1, 0.3)"
            });
            const yTo = gsap.quickTo(hoverEl, "y", {
              duration: 1,
              ease: "elastic.out(1, 0.3)"
            });
    
            hoverEl.addEventListener("pointermove", (event) => {
              const { clientX: cx, clientY: cy } = event;
              const { height, width, left, top } = hoverEl.getBoundingClientRect();
              const x = cx - (left + width / 2);
              const y = cy - (top + height / 2);
              xTo(x * 0.2);
              yTo(y * 0.2);
            });
    
            hoverEl.addEventListener("pointerout", () => {
              xTo(0);
              yTo(0);
            });
          }
        });
      }
    }
    
    const cursor = new Cursor(document.querySelector(".cursor"));
    const menuBtn = document.querySelector(".menu-btn");
    
    onResize();
    
    function update() {
      cursor.update();
    }
    
    function onMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;
    
      cursor.updateTargetPosition(x, y);
    }
    
    function onResize() {
      if (menuBtn) {
        const { x, y, width, height } = menuBtn.getBoundingClientRect();
        gsap.set(menuBtn, {
          left: x - width,
          top: y + height,
        });
      }
    }
    
    gsap.ticker.add(update);
    window.addEventListener("pointermove", onMouseMove);
    window.addEventListener("resize", onResize);

    // }
  }, [])

  // PLANES

  const planeRef1 = useRef()
  const planeRef2 = useRef()

  const planeRef1Mobile = useRef()
  const planeRef2Mobile = useRef()

  useEffect(() => {
    gsap.fromTo(planeRef1.current, { y: "-10vh", x: "-10vw" }, { y: "110vh", x: "110vw", scrollTrigger: { trigger: ".two", start: "top bottom", end: "bottom top", scrub: true } })
    gsap.fromTo(planeRef2.current, { y: "40vh", x: "110vw" }, { y: "80vh", x: "-15vw", scrollTrigger: { trigger: ".nine", start: "top bottom", end: "bottom top", scrub: true } })

    gsap.fromTo(planeRef1Mobile.current, { y: "40vh", x: "-50vw" }, { y: "110vh", x: "150vw", scrollTrigger: { trigger: ".two", start: "top bottom", end: "bottom top", scrub: true } })
    gsap.fromTo(planeRef2Mobile.current, { y: "40vh", x: "150vw" }, { y: "110vh", x: "-150vw", scrollTrigger: { trigger: ".nine", start: "top bottom", end: "bottom top", scrub: true } })
  }, [])

  useEffect(() => {
    const plane = document.querySelector(".plane-inside");
  
    gsap.to(plane, {
      duration: 4,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        const randomX = Math.sin(Date.now() / 1000) * 10; // Sinusoidal oscillation
        const randomY = Math.cos(Date.now() / 1000) * 10; // Cosine oscillation
        const randomRotation = Math.sin(Date.now() / 1500) * 2.5;
        gsap.set(plane, {
          x: randomX,
          y: randomY,
          rotation: randomRotation,
        });
      }
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="cursor" />
      <section className="loading-video" ref={sectionRef} >
        <div className="loading-video-content">
          {/* <video src="/videos/heaveloadingvideo2.mp4" className="loading-video-content-video" autoPlay muted playsInline controls={false} /> */}
          <img src="/images/hvl3.gif" className="loading-video-content-video" alt="" />
        </div>
      </section>
      {/* <div className="experience">
        <Canvas style={{ pointerEvents: 'none' }} camera={{ position: [2, 2, 5], fov: 35 }}>
          <Suspense >
            <Float floatingRange={0.5} >
                <Model />
            </Float>
          </Suspense>
          <Environment preset="studio" environmentIntensity={0.75} />
        </Canvas>
      </div> */}
      <div className="plane-1 plane-desktop" ref={planeRef1} >
        <div className="plane-inside">
          <img src="/images/plane1.webp" className="planes-image" alt="Main Image" />
        </div>
      </div>
      <div className="plane-1 plane-desktop" ref={planeRef2} >
        <div className="plane-inside">
          <img src="/images/plane2.webp" className="planes-image" alt="Main Image" />
        </div>
      </div>
      <div className="plane-1 plane-mobile" ref={planeRef1Mobile} >
        <div className="plane-inside">
          <img src="/images/plane1.webp" className="planes-image" alt="Main Image" />
        </div>
      </div>
      <div className="plane-1 plane-mobile" ref={planeRef2Mobile} >
        <div className="plane-inside">
          <img src="/images/plane2.webp" className="planes-image" alt="Main Image" />
        </div>
      </div>
        <div id="section1" >
          <Section1 />
        </div>
        <div id="section2" >
          <Section2 />
        </div>
        <div id="section3" >
          <Section3 />
        </div>
        <div id="section4" >
          <Section4 />
        </div>
        <div id="section5" >
          <Section5 />
        </div>
        <div id="section5" >
          <Section5Mobile />
        </div>
        <div id="section8" >
          <Section8 />
        </div>
        <Section8Mobile />
        <div id="section7" >
          <Section7 lenis={lenis} />
        </div>
        <Section7Mobile />
        <div id="section9" >
          <Section9 />
          <Section9Mobile />
        </div>
        <SectionFooter />
    </ReactLenis>
  );
};

export default Main;