import React from 'react';
import './CareCardPrevention.scss';
import preventionImage from '../../assets/images/prevention.svg';

const CareCardPrevention = () => (
  <div className='CareCardPrevention__container'>
    <img src={preventionImage} alt='prevention' />
    <span className='CareCardPrevention__title'>Prevention</span>
  </div>
);

export default CareCardPrevention;
