import {useRef}  from 'react';
import {useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Planet = ({size, position, rotation, texturePath}) => {
  const texture = useLoader(TextureLoader, texturePath);

  const planetRef = useRef();
  const anchorRef = useRef();

  useFrame(() => {
    anchorRef.current.rotateY(rotation.aroundSun);
    planetRef.current.rotateY(rotation.self);
  });

  return (
    <object3D ref={anchorRef}>
      <mesh position={[position, 0, 0]} ref={planetRef}>
        <sphereGeometry args={[size, 30, 30]} attach="geometry" />
        <meshBasicMaterial map={texture} attach="material" />
      </mesh>
    </object3D>
  )
}