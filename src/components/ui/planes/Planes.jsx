import React, { memo } from 'react';
import Image from 'next/image';
import usePlaneAnimations from '@/hooks/usePlaneAnimations';
import './planes.css';

const Planes = memo(() => {
  const { planeRef1 } = usePlaneAnimations();

  return (
    <div className="plane-1" ref={planeRef1}>
      <div className="plane-inside">
        <Image 
          src="/images/plane1.webp" 
          className="planes-image" 
          alt="Plane animation"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
});

Planes.displayName = 'Planes';

export default Planes;