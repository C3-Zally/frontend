import React, { useState, useEffect } from 'react';
import OptionButton from '../OptionButton';
const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(true);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      localStorage.setItem('Theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(false);
      return document.documentElement.setAttribute('data-theme', 'dark');
    }
  });
  return (
    <OptionButton
      handlerClick={handleChange}
      label={
        themeState ? (
          <i className='icon__moon'></i>
        ) : (
          <i className='icon__sun'></i>
        )
      }
    />
  );
};

export default ThemeChanger;
