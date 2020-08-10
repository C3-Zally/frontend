import React, { useState, useEffect } from 'react';
import './SearchCountryBar.scss';
import CountryItem from '../../ui/CountryItem';
import Countries from '../../utility/countries';
const SearchCountryBar = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showCountries, setCountryes] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value) {
      setCountryes(true);
    } else {
      setCountryes(false);
    }
  };
  const onSelect = () => {
    setSearch('');
    setCountryes(false);
  };
  useEffect(() => {
    const results = Countries.filterCountriesByName(search);
    setSearchResults(results);
  }, [search]);

  return (
    <div className='searchbar'>
      <div className='searchbar__container'>
        <i className='searchbar__icon icon__search'></i>
        <input
          type='text'
          className='searchbar__input'
          placeholder='Search a Country'
          value={search}
          onChange={handleChange}
        />
      </div>
      {showCountries ? (
        <ul className='searchbar__items'>
          {searchResults.map((item) => (
            <CountryItem
              key={item.alpha3Code}
              country={item}
              onClickAction={onSelect}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default SearchCountryBar;
