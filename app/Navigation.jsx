/* eslint-disable jsx-a11y/alt-text */
"use client";
import { ArrowDown, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";

export const Navigation = () => {

    const navigationBar = useRef()
    const navigationMenu = useRef()
    const navigationMenuContent = useRef()
    const navigationBackground = useRef()
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // GSAP ANIMATIONS

    useEffect(() => {
        gsap.set(navigationMenu.current, { xPercent: 100, opacity: 1 });
        gsap.set(navigationBackground.current, { opacity: 0 });
    }, []);

    useLayoutEffect(() => {
        gsap.fromTo(navigationBar.current, { yPercent: -100, opacity: 0 }, { delay: 4, yPercent: 0, opacity: 1, duration: 0.5 })
    }, [])

    const handleMenuClick = () => {
        if (isAnimating) return;

        setMenuOpen(prevMenuOpen => {
            const newMenuOpen = !prevMenuOpen;

            setIsAnimating(true); // Start animating

            if (newMenuOpen) {
                // Open Menu Animation
                gsap.fromTo(
                    navigationMenu.current,
                    { xPercent: 100 },
                    { xPercent: 0, pointerEvents: "auto", duration: 0.5, ease: "power2.out", onComplete: () => setIsAnimating(false) }
                );
                gsap.fromTo(
                    navigationMenuContent.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1.5, ease: "power2.out" }
                );
                gsap.fromTo(
                    navigationBackground.current,
                    { opacity: 0, pointerEvents: "none" },
                    { opacity: 1, pointerEvents: "auto", duration: 0.5, ease: "power2.out" }
                );
            } else {
                // Close Menu Animation
                gsap.to(navigationMenu.current, {
                    xPercent: 100,
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: () => setIsAnimating(false)
                });
                gsap.to(navigationMenuContent.current, { opacity: 0, duration: 0.5, ease: "power2.in" });
                gsap.to(navigationBackground.current, { opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power2.in" });
            }

            return newMenuOpen;
        });
    };

    // NAVIGATION

    const handleClick = (linkUrl) => {
        window.open(linkUrl, '_blank');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // SCROLLED

    const [navScrolled, setNavScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 10;
        if (window.scrollY > scrollThreshold) {
          setNavScrolled(true);
        } else {
          setNavScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      };

  return (
    <div className={`navigation ${navScrolled ? "scrolled" : ""}`} ref={navigationBar} >
        <div className="navigation-left" >
            <Link href="/" className="link" >
                <div className="navigation-left-images">
                    <Image src="/images/heavelogo.png" className="navigation-image" width={500} height={500} />
                </div>
            </Link>
            <ul className="navigation-menu">
                <li className="navigation-menu-row" onClick={() => scrollToSection("section1")} >
                    <h1 className="small-description white hover-text-white" >Home</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSection("section2")} >
                    <h1 className="small-description white hover-text-white" >Services</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSection("section3")} >
                    <h1 className="small-description white hover-text-white" >Case Studies</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSection("section4")} >
                    <h1 className="small-description white hover-text-white" >Process</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSection("section5")} >
                    <h1 className="small-description white hover-text-white" >Contact</h1>
                </li>
            </ul>
        </div>
        <div className="navigation-right">
            <div data-hover className="navigation-button">
                <div className="button-content">
                    <span className="small-description">Contact Us</span>
                    <span className="small-description">Contact Us</span>
                </div>
                <div data-hover-bounds></div>
            </div>
            <div className="navigation-round-button">
                <div className="navigation-right-menu-line" />
                <div className="navigation-right-menu-line" />
                <div className="navigation-right-menu-line" />
            </div>
        </div>
    </div>
  );
};