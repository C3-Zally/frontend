import React from 'react';

import MainBanner from '../../components/MainBanner';
import TitleSection from '../../components/TitleSection';
import ProgressChart from '../../components/ProgressChart';
import GlobalMap from '../../components/GlobalMap';
import DonutChart from '../../components/DonutChart';
const Global = (params) => {
  return (
    <>
      <section className='overview'>
        <TitleSection title='Overview' />
        <ProgressChart />
      </section>
      <section className='rates'>
        <DonutChart type='isRecovery' />
        <DonutChart type='isFatality' />
      </section>
      <section className='progressChart'>
        <TitleSection title='New Cases' infoButton />
        <GlobalMap />
      </section>
    </>
  );
};

export default Global;
