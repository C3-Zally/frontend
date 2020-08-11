import React from 'react';
import CareCardPrevention from '../CareCardPrevention/index';
import CareCards from '../CareCards/index';
import './TakeCareContainer.scss';

const TakeCareContainer = () => {
  return (
    <React.Fragment>
      <section className='TakeCare__main'>
        <h4 className='TakeCare__title'>
          Take Care{/*<span className='icon__info'></span>*/}
        </h4>
        <div className='TakeCare__container'>
          <CareCardPrevention />
          <CareCards />
        </div>
      </section>
    </React.Fragment>
  );
};
export default TakeCareContainer;
