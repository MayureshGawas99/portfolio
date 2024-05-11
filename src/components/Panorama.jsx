// import React, { useRef } from "react";
// import ReactPannellum, { getConfig } from "react-pannellum";
// import panorama from "../assets/panorama.png";

// const Panorama = () => {
//   const pannellumRef = useRef();

//   //   const click = () => {
//   //     console.log(getConfig());
//   //   };

//   const config = {
//     autoRotate: -2,
//     showControls: false,
//     autoLoad: true,
//     draggable: false,
//     mouseZoom: false,
//     keyboardZoom: false,
//     hfov: 150,
//   };

//   return (
//     <div className="h-screen w-screen absolute top-0 z-0">
//       <ReactPannellum
//         ref={pannellumRef}
//         id="1"
//         sceneId="firstScene"
//         imageSource={panorama}
//         config={config}
//         style={{
//           width: "100vw",
//           height: "100vh",
//           background: "#000000",
//         }}
//       />
//       {/* <div onClick={click}>Click me</div> */}
//     </div>
//   );
// };

// export default Panorama;

import React, { useEffect } from "react";
import * as THREE from "three";
import panoramaImage from "../assets/panorama.hdr";
import { ImagePanorama, Viewer } from "panolens";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const Panorama = () => {
  return (
    <div className="h-screen w-screen absolute top-0 z-0">
      <Canvas camera={{ position: [-0.5, 1, 2] }} style={{ height: "100vh" }}>
        <Environment files={panoramaImage} background blur={0.5} />
        {/* <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <primitive object={gltf.scene} position={[0, 1, 0]} /> */}
        <OrbitControls target={[0, 1, 0]} autoRotate autoRotateSpeed={0.2} />
        {/* <axesHelper args={[5]} />
      <Stats /> */}
      </Canvas>
    </div>
  );
};

export default Panorama;
