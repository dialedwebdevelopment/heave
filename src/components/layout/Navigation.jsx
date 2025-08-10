/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useEffect, useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from 'lenis/react';

export const Navigation = memo(() => {
    const lenis = useLenis();

    const menuItems = [
        { id: "section1", label: "Home", scrollFunction: "scrollToSectionTop" },
        { id: "section2", label: "About", scrollFunction: "scrollToSectionCenter" },
        { id: "section5", label: "Case Studies", scrollFunction: "scrollToSectionTop" },
        { id: "section7", label: "Process", scrollFunction: "scrollToSectionTop" },
        { id: "section9", label: "Contact", scrollFunction: "scrollToSectionCenter" }
    ];

    const [navScrolled, setNavScrolled] = useState(false);

    useEffect(() => {
        let isScrolled = false;
        const scrollThreshold = 10;

        const handleScroll = () => {
            const currentScrollY = window.scrollY > scrollThreshold;
            
            if (currentScrollY !== isScrolled) {
                isScrolled = currentScrollY;
                setNavScrolled(isScrolled);
            }
        };
  
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSectionCenter = (sectionId) => {
        if (!lenis) return;
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionRect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offset = sectionRect.top + scrollTop - (window.innerHeight / 2) + (sectionRect.height / 2);
      
            lenis.scrollTo(offset);
        }
    };

    const scrollToSectionTop = (sectionId) => {
        if (!lenis) return;
        const section = document.getElementById(sectionId);
        if (section) {
            lenis.scrollTo(section);
        }
    };
    
    const handleMenuItemClick = (item) => {
        if (item.scrollFunction === "scrollToSectionTop") {
            scrollToSectionTop(item.id);
        } else if (item.scrollFunction === "scrollToSectionCenter") {
            scrollToSectionCenter(item.id);
        }
    };

    return (
        <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
            <div className="navigation-left">
                <Link href="/" className="link" aria-label="Home" >
                    <div className="navigation-left-images">
                        <Image 
                            src="/brand/heavelogo.png" 
                            className="navigation-image" 
                            width={100} 
                            height={100} 
                            alt="Heave logo"
                            priority
                        />
                    </div>
                </Link>
                <ul className="navigation-menu">
                    {menuItems.map((item, index) => (
                        <li 
                            key={index} 
                            className="navigation-menu-row" 
                            onClick={() => handleMenuItemClick(item)}
                        >
                            <h1 className="small-description white hover-text-white">{item.label}</h1>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navigation-right">
                <div 
                    data-hover 
                    className="navigation-button navigation-button-mobile-hidden" 
                    onClick={() => scrollToSectionCenter("section9")}
                >
                    <div className="button-content">
                        <span className="small-description">Contact Us</span>
                        <span className="small-description">Contact Us</span>
                    </div>
                    <div data-hover-bounds></div>
                </div>
                <div 
                    className="navigation-button navigation-button-desktop-hidden" 
                    onClick={() => scrollToSectionTop("section9")}
                >
                    <div className="button-content">
                        <span className="small-description">Contact Us</span>
                        <span className="small-description">Contact Us</span>
                    </div>
                </div>
            </div>
        </div>
    );
});

Navigation.displayName = 'Navigation';