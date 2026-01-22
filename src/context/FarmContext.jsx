import React, { createContext, useState, useContext } from 'react';

const FarmContext = createContext();

export const useFarm = () => {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error('useFarm must be used within FarmProvider');
  }
  return context;
};

export const FarmProvider = ({ children }) => {
  const [cropRecommendations, setCropRecommendations] = useState([]);
  const [soilResult, setSoilResult] = useState(null);

  const handleSoilResult = (result) => {
    setSoilResult(result);
    if (result?.cropRecommendations) {
      setCropRecommendations(result.cropRecommendations.recommendations || []);
    }
  };

  return (
    <FarmContext.Provider value={{
      cropRecommendations,
      soilResult,
      handleSoilResult,
      setCropRecommendations,
      setSoilResult,
    }}>
      {children}
    </FarmContext.Provider>
  );
};
