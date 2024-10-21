import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Model from "./Model";
import { useThree } from "@react-three/fiber";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Experience = () => {

  return (
    <Canvas camera={{ position: [2, 2, 5], fov: 35 }}>
        <Suspense >
            <Float floatingRange={0.5} >
                <Model />
            </Float>
        </Suspense>
        <ambientLight />
        {/* <Environment preset="studio" environmentIntensity={0.75} /> */}
        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={false} enablePan={false} />
        <ContactShadows scale={50} position={[0, -2, 0]} blur={1} far={10} opacity={0.5} />
    </Canvas>
  );
};