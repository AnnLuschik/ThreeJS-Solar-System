import {useRef, useContext} from 'react';
import {useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";

import {DetallesContext} from '../App';
import {Planet} from './Planet';
import {sun, planets} from '../constants';

export const SolarSystem = () => {
  const {setData} = useContext(DetallesContext);

  const sunTexture = useLoader(TextureLoader, sun.texturePath);

  const sunObj = useRef();

  useFrame(() => {
    sunObj.current.rotateY(sun.rotation);
  })

  return (
    <>
    <mesh ref={sunObj} onClick={() => setData({isVisible: true, detalles: sun})}>
      <sphereGeometry args={[sun.size, 30, 30]} attach="geometry" />
      <meshBasicMaterial map={sunTexture} attach="material" />
    </mesh>
    {planets.map((planet) => <Planet key={planet.name} planetData={planet} />)}
    </>
  );
}