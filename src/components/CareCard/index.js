import React from 'react';
import './CareCard.scss';

const CareCard = ({ title, image }) => (
  <React.Fragment>
    <div className='CareCard__item'>
      <img src={image} alt='' />
      <span className='CareCard__item--title'>{title}</span>
    </div>
  </React.Fragment>
);
export default CareCard;
