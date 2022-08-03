import React, {createContext, useState} from 'react';

import { Annotation } from './components/Annotation';
import { Scene } from './components/Scene';

export const DetailsContext = createContext();

function App() {
  const [data, setData] = useState({isVisible: false, details: null});

  return (
    <>
      <DetailsContext.Provider value={{data, setData}}>
        <Annotation />
        <Scene />
      </DetailsContext.Provider>
    </>
  );
}

export default App;
