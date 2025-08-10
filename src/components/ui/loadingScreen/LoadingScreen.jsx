import React from 'react';
import Image from 'next/image';
import useLoadingScreen from '@/hooks/useLoadingScreen';
import './loadingScreen.css';

const LoadingScreen = () => {
  const { sectionRef } = useLoadingScreen();

  return (
    <section className="loading-video" ref={sectionRef}>
      <div className="loading-video-content">
        <Image 
          src="/images/hvl3.gif" 
          className="loading-video-content-video" 
          alt="Loading animation"
          fill
          priority
          unoptimized
        />
      </div>
    </section>
  );
};

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;