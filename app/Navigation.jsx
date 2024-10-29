/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

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
        gsap.fromTo(navigationBar.current, { yPercent: -100, opacity: 0 }, { delay: 3.5, yPercent: 0, opacity: 1, duration: 0.5 })
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

  return (
    <>
        <div className="navigation" ref={navigationBar} >
            <div className="navigation-left">
                <Image src="/images/heavelogo.png" className="navigation-image" width={500} height={500} onClick={scrollToTop} />
            </div>
            <div className="navigation-right">
                <button data-hover className="navigation-button" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} onClick={() => handleClick('https://portal.revvideoproductions.com/book')}  >
                    <h1 className="navigation-title" >Get In Touch</h1>
                    <div data-hover-bounds></div>
                </button>
                <button data-hover className="navigation-right-menu" onClick={handleMenuClick} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} >
                    <div className="navigation-right-menu-line" />
                    <div className="navigation-right-menu-line" />
                    <div className="navigation-right-menu-line" />
                    <div data-hover-bounds></div>
                </button>
            </div>
        </div>
        <div className="navigation-menu" ref={navigationMenu} >
            <div className="navigation-menu-content" ref={navigationMenuContent} >
                <div className="menu-button">
                    <span className="menu-text">Home</span>
                    <span className="menu-text">Home</span>
                </div>
                <div className="menu-button">
                    <span className="menu-text menu-text-not-active">About</span>
                    <span className="menu-text menu-text-not-active">About</span>
                </div>
                <div className="menu-button">
                    <span className="menu-text menu-text-not-active">Projects</span>
                    <span className="menu-text menu-text-not-active">Projects</span>
                </div>
                <div className="menu-button">
                    <span className="menu-text menu-text-not-active">Book</span>
                    <span className="menu-text menu-text-not-active">Book</span> 
                </div>
                <div className="menu-button">
                    <span className="menu-text menu-text-not-active">Contact</span>
                    <span className="menu-text menu-text-not-active">Contact</span>
                </div>
            </div>
        </div>
        <div className="navigation-background" ref={navigationBackground} onClick={handleMenuClick} />
    </>
  );
};