import React from 'react';
import {useLoader} from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";

import {Planet} from './Planet';
import {sun, planets} from '../constants';

export const SolarSystem = () => {
  const sunTexture = useLoader(TextureLoader, sun.texturePath);

  return (
    <>
    <mesh>
      <sphereGeometry args={[16, 30, 30]}  />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
    {planets.map((planet) => <Planet key={planet.name} {...planet} />)}
    </>
  );
}