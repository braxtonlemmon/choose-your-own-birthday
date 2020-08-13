import React, { useState, useEffect } from 'react';
import AdventureContext from './AdventureContext';

const ContextProvider = ({ children }) => {
  let initialAdventureState = {
    sore: true,
    bored: true,
    ungry: true,
  };

  const [choices, updateChoices] = useState(initialAdventureState);

  return(
    <AdventureContext.Provider
      value={{
        choices,
        updateChoices
      }}
    >
      {children}
    </AdventureContext.Provider>
  );
};

export default ContextProvider;