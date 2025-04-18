/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Navigation = () => {

    // Navigation menu data - centralized for easier management
    const menuItems = [
        { id: "section1", label: "Home", scrollFunction: "scrollToSectionTop" },
        { id: "section2", label: "About", scrollFunction: "scrollToSectionCenter" },
        { id: "section5", label: "Case Studies", scrollFunction: "scrollToSectionTop" },
        { id: "section7", label: "Process", scrollFunction: "scrollToSectionTop" },
        { id: "section9", label: "Contact", scrollFunction: "scrollToSectionCenter" }
    ];

    // SCROLLED
    const [navScrolled, setNavScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 10;
            setNavScrolled(window.scrollY > scrollThreshold);
        };
  
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSectionCenter = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionRect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offset = sectionRect.top + scrollTop - (window.innerHeight / 2) + (sectionRect.height / 2);
      
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
    };

    const scrollToSectionTop = (sectionId) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };
    
    // Function to handle scroll action based on the menu item configuration
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
                <Link href="/" className="link">
                    <div className="navigation-left-images">
                        <img src="/images/heavelogo.png" className="navigation-image" width={500} height={500} />
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
};