import React from 'react';
import PropTypes from 'prop-types';
import './CountryItem.scss';
const CountryItem = ({ country }) => {
  return (
    <div className='country-item'>
      <img
        className='country-item__flag'
        src={country.flag}
        alt='country flag'
      ></img>
      <span className='country-item__name'>{country.name}</span>
    </div>
  );
};
CountryItem.propTypes = {
  key: PropTypes.any,
  country: PropTypes.exact({
    name: PropTypes.string.isRequired,
    alpha2Code: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }),
};
export default CountryItem;
