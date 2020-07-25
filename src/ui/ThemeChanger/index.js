import React, { useState, useEffect } from 'react'

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('Theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return  document.documentElement.setAttribute('data-theme', 'dark')
  })
  return (
    <div>
      <button onClick={handleChange}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default ThemeChanger;