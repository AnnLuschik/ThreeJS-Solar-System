import React, {createContext, useState} from 'react';

import { Annotation } from './components/Annotation';
import { Scene } from './components/Scene';

export const DetallesContext = createContext();

function App() {
  const [data, setData] = useState({isVisible: false, detalles: null});

  return (
    <>
      <DetallesContext.Provider value={{data, setData}}>
        <Annotation />
        <Scene />
      </DetallesContext.Provider>
    </>
  );
}

export default App;
