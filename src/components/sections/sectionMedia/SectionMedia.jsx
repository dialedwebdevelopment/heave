import React from "react";
import CarouselSection from "@/components/ui/carouselSection/CarouselSection";
import { mediaData } from '@/constants/mediaData';

const SectionMedia = () => {
  return (
    <CarouselSection
      id="sectionMedia"
      title={<><span className="blue" >Some of the media</span> we run (& many more)</>}
      items={mediaData}
      imageClassName="five-card-image-img-small"
      scrollDistance="-86.4%"
      className="five-tall"
    />
  );
};

export default SectionMedia;