import React, { useState } from "react";
import * as THREE from "three";
import portal from "../../assets/loading/nether_load.mp4";

const Portal = ({ position, rotation }) => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = portal;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.wrapS = videoTexture.wrapT = THREE.RepeatWrapping;
  videoTexture.magFilter = THREE.NearestFilter;
  videoTexture.repeat.set(2, 3); // Repeat 3 times horizontally and 2 times vertically

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[2, 3]} />
      <meshStandardMaterial side={THREE.DoubleSide}>
        <primitive attach="map" object={videoTexture} />
      </meshStandardMaterial>
    </mesh>
  );
};

export default Portal;
