import React from 'react';
import PropTypes from 'prop-types';
import './CountryItem.scss';
const CountryItem = ({country}) => {
    return (
        <div className="country-item">
            <img className="country--flag" src={country.flag} alt='country flag'></img>
            <span className="country--name">{country.name}</span>
        </div>
    )
}
CountryItem.prototype = {
  key: PropTypes.any,
  country: PropTypes.exact({
        name: PropTypes.string.isRequired,
        alpha2Code: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        flag: PropTypes.string.isRequired,
      }),
}
export default CountryItem;