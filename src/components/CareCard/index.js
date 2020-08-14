import React from 'react';
import './CareCard.scss';

const CareCard = ({ title, image }) => (
  <div className='CareCard__item'>
    <img src={image} alt={title} />
    <span className='CareCard__item--title'>{title}</span>
  </div>
);
export default CareCard;
