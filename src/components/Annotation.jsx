import React, {useContext} from 'react';
import { MdClose } from "react-icons/md";

import {DetallesContext} from '../App';

export const Annotation = () => {
  const {data: {isVisible, detalles}, setData} = useContext(DetallesContext);

  return isVisible && (
    <aside>
      <div className="container">
        <button type="button" onClick={() => setData({...detalles, isVisible: false})}>
          <MdClose />
        </button>
        <div className='title'>
          <h2>{detalles.name}</h2>
        </div>
        <div className='description'>
        <p>{detalles.description}</p>
          {Number.isInteger(detalles.moons) && <p>Moons: {detalles.moons}</p>}
          <p>Length of year: {detalles.yearLength} {detalles.yearLengthUnit}s</p>
        </div>
      </div>
    </aside>
  );
};