import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';

import {SolarSystem} from './components/SolarSystem';


function App() {
  return (
    <Canvas camera={{fov: 45, near: 0.1, far: 1000, position: [-90, 140, 140]}}>
      <OrbitControls />
      <Stars radius={200} />
      <ambientLight color={0x333333} intensity={0.5} />
      <pointLight color={0xFFFFFF} intensity={2} distance={300} />
      <SolarSystem />
    </Canvas>
  );
}

export default App;
