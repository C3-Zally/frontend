import React from 'react';
import { useParams } from 'react-router-dom';

import MainBanner from '../../components/MainBanner';
import TitleSection from '../../components/TitleSection';
import ProgressChart from '../../components/ProgressChart';
import GlobalMap from '../../components/GlobalMap';
import DonutChart from '../../components/DonutChart';
const Country = () => {
  let { id } = useParams();
  let random1 = Math.ceil(Math.random() * 5000);
  let random2 = Math.ceil(Math.random() * 5000);
  let random3 = Math.ceil(Math.random() * 5000);
  let random4 = Math.ceil(Math.random() * 50);
  return (
    <>
      <section className='overview'>
        <TitleSection title='Overview' />
        <MainBanner
          alpha2Code={id}
          recoveredValue={random1}
          incrementPercentageValue={random4}
          incrementPercentageIcon='up'
          incrementPercentageIconColor='green'
          confirmedValue={random3}
          confirmedPercentage={random4}
          confirmedIcon='up'
          confirmedIconColor='red'
          deathsValue={random2}
          deathsPercentage={random4}
          deathsIcon='down'
          deathsIconColor='dark'
        />
      </section>
      <section className='rates'>
        <DonutChart type='isRecovery' />
        <DonutChart type='isFatality' />
      </section>
      <section className='progressChart'>
        <TitleSection title='New Cases' infoButton />
        <ProgressChart />
        <GlobalMap alpha2Code={id} />
      </section>
    </>
  );
};

export default Country;
