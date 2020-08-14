import React from 'react';
import SymptomsCarousel from '../../components/SymptomsCarousel';
import TakeCareContainer from '../../components/TakeCareContainer';

const TakeCare = () => {
  return (
    <section className='overview'>
      <TakeCareContainer />
      <SymptomsCarousel />
    </section>
  );
};

export default TakeCare;
