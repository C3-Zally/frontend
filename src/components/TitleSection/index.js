import React from 'react';
import './TitleSection.scss';

const TitleSection = ({ title, infoButton }) => (
  <header className='title'>
    <h2>{title}</h2>
    {infoButton && (
      <button>
        <i className='icon__info'></i>
      </button>
    )}
  </header>
);

export default TitleSection;
