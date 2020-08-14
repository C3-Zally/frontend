import React from 'react';
import PropTypes from 'prop-types';
import './OptionButton.scss';

const OptionButton = ({ label, handlerClick }) => (
  <button className='OptionButton' onClick={handlerClick}>
    {label}
  </button>
);
OptionButton.defaultProps = {
  label: <i className='icon__info'></i>,
  handlerClick: () => console.log('ok'),
};
OptionButton.propTypes = {
  label: PropTypes.node.isRequired,
  handlerClick: PropTypes.func.isRequired,
};
export default OptionButton;
