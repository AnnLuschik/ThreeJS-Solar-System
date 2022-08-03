import {useContext} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';

import {SolarSystem} from './SolarSystem';
import {DetallesContext} from '../App';

export const Scene = () => {
  const value = useContext(DetallesContext);

  return (
    <Canvas camera={{fov: 45, near: 0.1, far: 1000, position: [-90, 140, 140]}}>
      <DetallesContext.Provider value={value}>
        <OrbitControls />
        <Stars radius={200} />
        <ambientLight color={0x333333} />
        <pointLight color={0xFFFFFF} intensity={2} distance={300} />
        <SolarSystem />
      </DetallesContext.Provider>
    </Canvas>
  );
}

