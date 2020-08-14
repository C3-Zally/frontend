import React from 'react';
import CareCardPrevention from '../CareCardPrevention';
import CareCards from '../CareCards';
import TitleSection from '../TitleSection';
import './TakeCareContainer.scss';

const TakeCareContainer = () => {
  return (
    <section className='TakeCare__main'>
      <TitleSection title='Take Care' />
      <div className='TakeCare__container'>
        <CareCardPrevention />
        <CareCards />
      </div>
    </section>
  );
};
export default TakeCareContainer;
