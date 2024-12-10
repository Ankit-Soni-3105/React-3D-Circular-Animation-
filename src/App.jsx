import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./style.css";
import Cylinder from "./Cylinder";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text absolute flex justify-center w-full h-full top-[3vw]">
        React Three Fiber Animation
      </h1>

      <Canvas flat camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Cylinder />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={7.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          <ToneMapping />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
