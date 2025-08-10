import { useState, useEffect } from 'react';

const useAnimatedNumbers = (initialValues, updateInterval = 1500) => {
  const [numbers, setNumbers] = useState(initialValues);

  useEffect(() => {
    const updateNumbers = () => {
      setNumbers(prev => {
        const newNumbers = { ...prev };
        
        Object.keys(newNumbers).forEach(key => {
          const increment = Math.floor(Math.random() * 151) + 100;
          newNumbers[key] += increment;
        });
        
        return newNumbers;
      });
    };

    const interval = setInterval(updateNumbers, updateInterval);
    return () => clearInterval(interval);
  }, [updateInterval]);

  return numbers;
};

export default useAnimatedNumbers;