import React from 'react';

import TitleSection from '../../components/TitleSection';
import ProgressChart from '../../components/ProgressChart';
import GlobalMap from '../../components/GlobalMap';
import DonutChart from '../../components/DonutChart';
const Global = (params) => {
  return (
    <>
      <section className='progressChart'>
        <TitleSection title='New Cases' infoButton />
        <ProgressChart />
      </section>
      <GlobalMap />
      <section className='rates'>
        <DonutChart type='isRecovery' />
        <DonutChart type='isFatality' />
      </section>
    </>
  );
};

export default Global;
