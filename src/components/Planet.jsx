import React from 'react';
import {useLoader} from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Planet = ({size, position, texturePath}) => {
  const texture = useLoader(TextureLoader, texturePath);
  return (
    <mesh position={[position, 0, 0]}>
      <sphereGeometry args={[size, 30, 30]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}