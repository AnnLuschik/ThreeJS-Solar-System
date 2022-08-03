import React, {useContext} from 'react';
import { MdClose } from "react-icons/md";

import {DetailsContext} from '../App';

export const Annotation = () => {
  const {data: {isVisible, details}, setData} = useContext(DetailsContext);

  return isVisible && (
    <aside>
      <div className="container">
        <button type="button" onClick={() => setData({...details, isVisible: false})}>
          <MdClose />
        </button>
        <div className='title'>
          <h2>{details.name}</h2>
        </div>
        <div className='description'>
        <p>{details.description}</p>
          {Number.isInteger(details.moons) && <p>Moons: {details.moons}</p>}
          <p>Length of year: {details.yearLength} {details.yearLengthUnit}s</p>
        </div>
      </div>
    </aside>
  );
};