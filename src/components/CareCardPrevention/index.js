import React from 'react';
import './CareCardPrevention.scss';
import preventionImage from '../../assets/images/prevention.svg';

const CareCardPrevention = () => (
  <React.Fragment>
    <div className='CareCardPrevention__container'>
      <img src={preventionImage} alt='' />
      <h2 className='CareCardPrevention__title'>Prevention</h2>
    </div>
  </React.Fragment>
);

export default CareCardPrevention;
