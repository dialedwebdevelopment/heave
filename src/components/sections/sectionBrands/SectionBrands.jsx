'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import CircleButton from '@/components/ui/circleButton/CircleButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sectionbrands.css';

gsap.registerPlugin(ScrollTrigger);

const brandsData = [
    { id: 1, title: 'Our Brands', description: 'A Portfolio of Global Brands Driving Culture, Entertainment, and Commerce to Millions Every Day' },
    { id: 2, image: '/brands/Collegefessing.jpg', logo: '/brands/Collegefessinglogo.jpg', title: 'Collegefessing', link: 'https://www.instagram.com/collegefessing/' },
    { id: 3, image: '/brands/Fuckboyproblems.jpg', logo: '/brands/Fuckboyproblemslogo.jpg', title: 'Fuckboyproblems', link: 'https://www.instagram.com/fuckboyproblem.s/' },
    { id: 4, image: '/brands/Ight.jpg', logo: '/brands/Ightlogo.jpg', title: 'Ight', link: 'https://www.instagram.com/ight/' },
    { id: 5, image: '/brands/Knockouts.jpg', logo: '/brands/Knockoutlogo.jpg', title: 'Knockouts', link: 'https://www.instagram.com/knockout/' },
    { id: 6, image: '/brands/Moist.png', logo: '/brands/Moistlogo.jpg', title: 'Moist', link: 'https://www.instagram.com/moist/' },
    { id: 7, image: '/brands/Moovies.jpg', logo: '/brands/Moovieslogo.jpg', title: 'Moovies', link: 'https://www.instagram.com/moovies/' },
    { id: 8, image: '/brands/Artist.jpg', logo: '/brands/Artistlogo.jpg', title: 'Artist', link: 'https://www.instagram.com/artist/' }
];

const SectionBrands = () => {
    const gridRef = useRef(null);
    const itemRefs = useRef([]);

    const handleItemClick = (link) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    const scrollToContact = () => {
        const lenis = window.lenis;
        if (lenis) {
            const contactSection = document.querySelector('.section-footer');
            if (contactSection) {
                lenis.scrollTo(contactSection);
            }
        }
    };

    useEffect(() => {
        if (itemRefs.current.length > 0) {
            gsap.set(itemRefs.current, { opacity: 0 });
            
            const animation = gsap.to(itemRefs.current, {
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    once: true
                }
            });

            return () => {
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
                animation.kill();
            };
        }
    }, []);

    return (
        <section className="section-brands">
            <div className="brands-grid" ref={gridRef}>
                {brandsData.map((brand, index) => (
                    <div
                        key={brand.id}
                        ref={el => itemRefs.current[index] = el}
                        className={`brand-item ${brand.link ? 'brand-item-clickable' : ''}`}
                        onClick={() => handleItemClick(brand.link)}
                    >
                        {brand.id === 1 ? (
                            <div className="brand-text-content">
                                <div className="brand-textbox" >
                                    <h2 className="subheadline white">{brand.title}</h2>
                                    <p className="small-description white">{brand.description}</p>
                                </div>
                                <CircleButton
                                    text="Contact Us"
                                    onClick={scrollToContact}
                                    className="section-brands-button"
                                />
                            </div>
                        ) : (
                            <>
                                <Image
                                    src={brand.image}
                                    alt={brand.title}
                                    width={500}
                                    height={500}
                                    className="brand-image"
                                />
                                {brand.logo && (
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.title} logo`}
                                        width={150}
                                        height={150}
                                        className="brand-logo"
                                    />
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default React.memo(SectionBrands);