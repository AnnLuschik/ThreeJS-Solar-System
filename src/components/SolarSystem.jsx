import {useRef} from 'react';
import {useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";

import {Planet} from './Planet';
import {sun, planets} from '../constants';

export const SolarSystem = () => {
  const sunTexture = useLoader(TextureLoader, sun.texturePath);

  const sunObj = useRef();

  useFrame(() => {
    sunObj.current.rotateY(sun.rotation);
  })

  return (
    <>
    <mesh ref={sunObj}>
      <sphereGeometry args={[sun.size, 30, 30]} attach="geometry" />
      <meshBasicMaterial map={sunTexture} attach="material" />
    </mesh>
    {planets.map((planet) => <Planet key={planet.name} {...planet} />)}
    </>
  );
}