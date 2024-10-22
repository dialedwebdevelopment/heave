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
        {/* <ambientLight /> */}
        <Environment preset="studio" environmentIntensity={0.75} />
    </Canvas>
  );
};