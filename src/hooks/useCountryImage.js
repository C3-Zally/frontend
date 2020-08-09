import { useState, useEffect } from 'react';
import Countries from '../utility/countries';

export const useCountryImage = (countryCode) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [countryImage, setCountryImage] = useState(null);

  const country = Countries.getByAlphaCode(countryCode);
  const randomImage = Math.floor(Math.random() * 10);
  const API =
    'https://api.unsplash.com/search/photos?client_id=rTLPnTqzq-rK3TnatKGFvmVeFGaZeYToaKUyzwcJOiA&query=';

  const getImage = async () => {
    try {
      const response = await fetch(`${API}${country.name}`);
      const data = await response.json();
      setCountryImage(data.results[randomImage].urls.regular);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getImage();
  }, [countryCode]);

  return {
    countryImage,
    error,
    isLoading,
  };
};
