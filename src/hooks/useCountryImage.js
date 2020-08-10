import { useState, useEffect } from 'react';

export const useCountryImage = (countryName) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [countryImage, setCountryImage] = useState(null);

  const API =
    'https://api.unsplash.com/search/photos?client_id=rTLPnTqzq-rK3TnatKGFvmVeFGaZeYToaKUyzwcJOiA&query=';

  useEffect(() => {
    // https://es.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    const randomImage = Math.floor(Math.random() * 10);
    const getImage = async (name) => {
      try {
        const response = await fetch(`${API}${name}`);
        const data = await response.json();
        setCountryImage(data.results[randomImage].urls.regular);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getImage(countryName);
  }, [countryName]);

  return {
    countryImage,
    error,
    isLoading,
  };
};
