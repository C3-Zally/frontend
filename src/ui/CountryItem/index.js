import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './CountryItem.scss';
const CountryItem = ({ country, history, onClickAction }) => {
  const handleOnClick = () => {
    history.push(`/country/${country.alpha2Code}`);
    onClickAction();
  };
  return (
    <div className='country-item' onClick={handleOnClick}>
      <img
        loading='lazy'
        className='country-item__flag'
        src={country.flag}
        alt='country flag'
      />
      <span className='country-item__name'>{country.name}</span>
    </div>
  );
};
CountryItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    alpha2Code: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }),
  onClickAction: PropTypes.func,
};
export default withRouter(CountryItem);
