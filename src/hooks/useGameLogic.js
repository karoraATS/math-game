import { useState } from 'react';

export const useGameLogic = (baseNumber) => {
  const [currentStep, setCurrentStep] = useState(1); // 1 to 12
  const [isError, setIsError] = useState(false);

  const checkAnswer = (spokenNumber) => {
    const expected = baseNumber * (currentStep + 1);
    
    if (spokenNumber === expected) {
      if (currentStep === 11) return "WIN";
      setCurrentStep(prev => prev + 1);
      return "CORRECT";
    } else {
      setCurrentStep(1); // Reset to zero/one on error
      setIsError(true);
      return "WRONG";
    }
  };

  return { currentStep, checkAnswer, isError, setIsError };
};