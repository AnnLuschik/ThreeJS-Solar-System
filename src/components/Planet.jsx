import {useRef, useContext}  from 'react';
import * as THREE from 'three';
import {useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";

import {DetallesContext} from '../App';
import {detalles} from '../constants';

export const Planet = ({ planetData }) => {
  const {size, position, rotation, texturePath, ring, name} = planetData;

  const {setData} = useContext(DetallesContext);

  const texture = useLoader(TextureLoader, texturePath);

  const planetRef = useRef();
  const anchorRef = useRef();

  useFrame(() => {
    anchorRef.current.rotateY(rotation.aroundSun);
    planetRef.current.rotateY(rotation.clockwise ? -rotation.self : rotation.self);
  });

  return (
    <object3D ref={anchorRef}>
      <mesh 
        ref={planetRef}
        name={name}
        position={[position, 0, 0]} 
        rotation={[rotation.obliquity, 0, 0]} 
        onClick={() => setData({isVisible: true, detalles: detalles[name]})}
      >
        <sphereGeometry args={[size, 30, 30]} attach="geometry" />
        <meshStandardMaterial map={texture} attach="material" />
        {ring && <Ring {...ring} />}
      </mesh>
    </object3D>
  )
}

const Ring = (props) => {
  const {innerradius, outerRadius, texturePath} = props;
  const texture = useLoader(TextureLoader, texturePath);
  return (
    <mesh rotation={[-0.5 * Math.PI, 0, 0]}>
      <ringGeometry attach="geometry" args={[innerradius, outerRadius, 32]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} />
    </mesh>
  )
}