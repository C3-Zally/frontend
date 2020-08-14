import { useState, useEffect } from 'react';

export const useCountryCode = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [countryCode, setCountryCode] = useState(null);

  const API = 'http://ip-api.com/json/?fields=status,message,countryCode';

  const getCountryCode = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setCountryCode(data.countryCode);
    } catch (error) {
      const response = await fetch(API);
      const data = await response.json();
      setError(data.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCountryCode();
  }, []);

  return {
    countryCode,
    error,
    isLoading,
  };
};
