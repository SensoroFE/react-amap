import React from 'react';

export const AMapContext = React.createContext({});

export const useAMap = () => {
  const context = React.useContext(AMapContext);
  return context;
};
