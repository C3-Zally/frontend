import React from 'react';
import './SearchCountryBar.scss';
const SearchCountryBar = () => {
  return (
    <div className='searchbar'>
      <i className='searchbar__icon icon__search'></i>
      <input type='text' className='searchbar__input' placeholder='Search...' />
    </div>
  );
};
export default SearchCountryBar;
