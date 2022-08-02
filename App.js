import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';

function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshLambertMaterial color="pink" />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
    </Canvas>
  );
}

export default App;
