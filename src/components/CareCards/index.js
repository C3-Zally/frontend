import React from 'react';
import CareCard from '../CareCard';

import WashHand from '../../assets/images/wash-hand.svg';
import StayAtHome from '../../assets/images/stay-at-home.svg';
import UseMask from '../../assets/images/mask.svg';
import Soap from '../../assets/images/soap.svg';
import Desinfection from '../../assets/images/desinfection.svg';
import AvoidCrods from '../../assets/images/avoid-crowds.svg';
import './CareCards.scss';

const CareCards = () => {
  const cards = [
    {
      title: 'Whas your Hands',
      image: WashHand,
    },
    {
      title: 'Stay at Home',
      image: StayAtHome,
    },
    {
      title: 'Use Mask',
      image: UseMask,
    },
    {
      title: 'Use Soap',
      image: Soap,
    },
    {
      title: 'Desinfection',
      image: Desinfection,
    },
    {
      title: 'Avoid Crowds',
      image: AvoidCrods,
    },
  ];
  return (
    <div className='CareCards__container'>
      {cards.map((card) => (
        <CareCard title={card.title} image={card.image} />
      ))}
    </div>
  );
};
export default CareCards;
