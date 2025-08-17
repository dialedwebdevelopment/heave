'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SelectorButton from '@/components/ui/selectorButton/SelectorButton';
import Image from 'next/image';
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sectionplatform.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalTimeline = dynamic(() => import('@/components/ui/horizontalTimeline/HorizontalTimeline'), {
    ssr: false
});

const timelineData = [
    {
        title: 'Research & Discovery Phase',
        description: 'Initial research and planning phase for the project development including market analysis, user interviews, competitive research, and technical feasibility studies to ensure project success',
        image: '/platform/creatorDashboard.png',
        mobileImage: '/platform/creatorDashboard.png'
    },
    {
        title: 'Design & Prototyping Phase',
        description: 'Design and prototyping with user feedback integration through iterative design sprints, wireframing, high-fidelity mockups, and continuous user testing to validate design decisions',
        image: '/platform/creatorcampaigns.png',
        mobileImage: '/platform/creatorcampaigns.png'
    },
    {
        title: 'Development & Implementation',
        description: 'Development and implementation of core features using agile methodologies, continuous integration, code reviews, and quality assurance to deliver a robust and scalable solution',
        image: '/platform/brandcampaigns.png',
        mobileImage: '/platform/brandcampaigns.png'
    }
];

const SectionPlatform = () => {
    const [activeTab, setActiveTab] = useState('creatorDashboard');
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    const headlineRef = useRef(null);
    const platformLeftRef = useRef(null);
    
    useSplitTextAnimation(headlineRef);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Debounced resize handler
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 100);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (platformLeftRef.current) {
            gsap.set(platformLeftRef.current, { opacity: 0 });
            
            const animation = gsap.to(platformLeftRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: platformLeftRef.current,
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

    const selectorOptions = [
        { 
            value: 'creatorDashboard', 
            label: isMobile ? 'Creator' : 'Creator dashboard' 
        },
        { 
            value: 'creatorCampaigns', 
            label: isMobile ? 'Campaigns' : 'Creator campaigns' 
        },
        { 
            value: 'brandCampaigns', 
            label: isMobile ? 'Brands' : 'Brand campaigns' 
        }
    ];

    const contentData = {
        creatorDashboard: {
            title: 'Creator Dashboard',
            description: 'Brands and creators work together in one place - streamlined briefs, clear deliverables, and real-time feedback keep everyone aligned.',
            image: '/platform/creatorDashboard.png'
        },
        creatorCampaigns: {
            title: 'Creator Campaigns',
            description: 'Creators discover premium brand campaigns, and brands connect with vetted talent ready to deliver high-quality UGC.',
            image: '/platform/creatorcampaigns.png'
        },
        brandCampaigns: {
            title: 'Brand Campaigns',
            description: 'Launch or join performance-based campaigns where creators earn per view and brands pay only for real engagement.',
            image: '/platform/brandcampaigns.png'
        }
    };

    const currentContent = contentData[activeTab];

    return (
        <section className="section-platform">
            <Image src="/platform/mountains.avif" className="section-platform-background" width={1000} height={1000} alt="" />
            <div className="platform-left" ref={platformLeftRef}>
                <div className="platform-top" >
                    <h2 className="subheadline white" ref={headlineRef}>Campaigns made simple: launch to scale</h2>
                    <SelectorButton
                        options={selectorOptions}
                        activeValue={activeTab}
                        onValueChange={setActiveTab}
                    />
                </div>
                <div className="platform-textbox animation-container" key={activeTab}>
                    <h3 className="small-subheadline white" >{currentContent.title}</h3>
                    <p className="description white" >{currentContent.description}</p>
                </div>
            </div>
            <div className="platform-right" >
                <div className="platform-frame">
                    <Image src={currentContent.image} width={1000} height={1000} className="platform-image animation-container" key={`image-${activeTab}`} alt={currentContent.title} />
                </div>
            </div>
        </section>
    );
};

export default React.memo(SectionPlatform);