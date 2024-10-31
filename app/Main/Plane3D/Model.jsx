import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/plane.glb')

  const { camera, scene } = useThree();
  const model = useRef();


  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
  
      mm.add({
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)"
      }, (context) => {
        let { isMobile, isDesktop } = context.conditions;
  
        tl
        .to(model.current.position, {
            x: 8,
            y: -1,
            scrollTrigger: {
              trigger: ".two",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
        })
        .to(model.current.position, {
          y: 2,
          scrollTrigger: {
            trigger: ".three",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
      })
        .to(model.current.rotation, {
          y: Math.PI * 1,
          z: Math.PI * -0.1,
          scrollTrigger: {
            trigger: ".four",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(model.current.position, {
          x: -8,
          y: -3,
          scrollTrigger: {
            trigger: ".nine",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
      })
  //     .to(model.current.rotation, {
  //       y: 0,
  //       z: 0,
  //       scrollTrigger: {
  //         trigger: ".six",
  //         start: "top bottom",
  //         end: "center center",
  //         scrub: true,
  //         immediateRender: false,
  //       },
  //     })
  //     .to(model.current.position, {
  //       y: 2,
  //       scrollTrigger: {
  //         trigger: ".six",
  //         start: "top bottom",
  //         end: "center center",
  //         scrub: true,
  //         immediateRender: false,
  //       },
  //   })
  //   .to(model.current.position, {
  //     x: 8,
  //     y: -3,
  //     scrollTrigger: {
  //       trigger: ".seven",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //       immediateRender: false,
  //     },
  // })
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <group {...props} dispose={null} ref={model} position={[-8, 0, 0]} rotation={[0, 0, 0]} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.paper_plane_asset.geometry}
        material={materials.Paper_my}
        position={[0, 0, 0]}
        scale={0.15}
      />
    </group>
  )
}

useGLTF.preload('/models/plane.glb')