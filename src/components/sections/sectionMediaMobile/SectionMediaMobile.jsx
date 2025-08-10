import React from "react";
import CarouselSectionMobile from "@/components/ui/carouselSectionMobile/CarouselSectionMobile";
import { mediaData } from '@/constants/mediaData';

const SectionMediaMobile = () => {
  return (
    <CarouselSectionMobile
      id="sectionMediaMobile"
      title={<><span className="blue" >Some of the media</span> we run (& many more)</>}
      items={mediaData}
      imageClassName="five-card-image-img-small"
    />
  );
};

export default SectionMediaMobile;