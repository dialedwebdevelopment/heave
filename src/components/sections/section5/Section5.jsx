import React from "react";
import CarouselSection from "@/components/ui/carouselSection/CarouselSection";
import { brandData } from '@/constants/brandData';

const Section5 = () => {
  return (
    <CarouselSection 
      id="section5"
      title={<>Some of the <span className="blue">brands we&apos;ve worked with</span></>}
      items={brandData}
    />
  );
};

export default Section5;