/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useMemo } from "react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import StatCard from "@/components/ui/StatCard";
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';
import useAnimatedNumbers from '@/hooks/useAnimatedNumbers';
import { ANIMATION_STAGGERS, ANIMATION_DURATIONS } from '@/constants/animations';
import "./section4.css";

const Section4 = () => {
  const titleRef = useRef();
  
  const boxRef0 = useRef();
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  
  const boxRefs = [boxRef0, boxRef1, boxRef2];
  
  const statsData = [
    { label: "Impressions", key: "impressions", initialValue: 4700000000 },
    { label: "Likes", key: "likes", initialValue: 110000000 },
    { label: "Shares", key: "shares", initialValue: 30000000 }
  ];

  const initialNumbers = statsData.reduce((acc, stat) => {
    acc[stat.key] = stat.initialValue;
    return acc;
  }, {});

  const numbers = useAnimatedNumbers(initialNumbers);

  const splitTextConfig = useMemo(() => ({
    toVars: {
      opacity: 1,
      stagger: ANIMATION_STAGGERS.DEFAULT,
      duration: ANIMATION_DURATIONS.DEFAULT
    }
  }), []);

  const fadeInConfig = useMemo(() => ({
    duration: ANIMATION_DURATIONS.SLOW,
    stagger: ANIMATION_STAGGERS.BOXES,
    start: "top bottom"
  }), []);

  useSplitTextAnimation(titleRef, splitTextConfig);
  useFadeInOnScroll(boxRefs, fadeInConfig);

  return (
    <section id="section4" className="section four">
      <div className="four-content">
        <div className="textbox four-textbox">
          <h1 className="subheadline white" ref={titleRef}>
            Our Live Statistics <span className="blue">This Year</span>
          </h1>
        </div>
        <div className="four-content-row">
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.key}
              stat={stat}
              value={numbers[stat.key]}
              ref={boxRefs[index]}
              showDivider={index < statsData.length - 1}
            />
          ))}
        </div>
      </div>
      <div className="section-border"></div>
    </section>
  );
};

export default Section4;