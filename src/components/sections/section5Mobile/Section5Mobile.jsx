import React from "react";
import CarouselSectionMobile from "@/components/ui/carouselSectionMobile/CarouselSectionMobile";
import { brandData } from '@/constants/brandData';

const Section5Mobile = () => {
  return (
    <CarouselSectionMobile 
      id="section5mobile"
      title={<>Some of the <span className="blue">brands</span> we&apos;ve worked with</>}
      items={brandData}
    />
  );
};

export default Section5Mobile;