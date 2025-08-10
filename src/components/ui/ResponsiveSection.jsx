import React from 'react';
import useIsMobile from '@/hooks/useIsMobile';

const ResponsiveSection = ({ desktop: Desktop, mobile: Mobile, breakpoint = 768 }) => {
  const isMobile = useIsMobile(breakpoint);
  
  if (isMobile && Mobile) {
    return <Mobile />;
  }
  
  return <Desktop />;
};

export default ResponsiveSection;