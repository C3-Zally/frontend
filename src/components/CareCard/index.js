import React from 'react';
import './CareCard.scss';

const CareCard = ({ title, image }) => (
  <React.Fragment>
    <div className='CareCard__item'>
      <img src={image} alt='' />
      <h4>{title}</h4>
    </div>
  </React.Fragment>
);
export default CareCard;
