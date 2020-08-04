import React from 'react';
import SearchCountryBar from '../../components/SearchCountryBar';
import ThemeChanger from '../ThemeChanger';
import OptionButton from '../OptionButton';
import './TopBar.scss';

const TopBar = () => {
  return (
    <div className='TopBar'>
      <SearchCountryBar />
      <div className='TopBar__options'>
        <ThemeChanger />
        <OptionButton />
      </div>
    </div>
  );
};

export default TopBar;
