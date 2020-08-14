import React from 'react';
import MainBanner from '../../components/MainBanner';
import TitleSection from '../../components/TitleSection';
import ProgressChart from '../../components/ProgressChart';
import GlobalMap from '../../components/GlobalMap';
import DonutChart from '../../components/DonutChart';
import './Home.scss';

const Home = () => (
  <>
    <section className='overview'>
      <TitleSection title='Overview' />
      <MainBanner
        alpha2Code='MX'
        recoveredValue='209833'
        incrementPercentageValue='23'
        incrementPercentageIcon='up'
        incrementPercentageIconColor='green'
        confirmedValue='19239096'
        confirmedPercentage='14'
        confirmedIcon='up'
        confirmedIconColor='red'
        deathsValue='38245'
        deathsPercentage='8'
        deathsIcon='down'
        deathsIconColor='green'
      />
    </section>
    <section className='progressChart'>
      <TitleSection title='New Cases' infoButton />
      <ProgressChart />
      <GlobalMap alpha2Code='MX'/>
    </section>
    <section className='rates'>
      <DonutChart type='isRecovery' />
      <DonutChart type='isFatality' />
    </section>
  </>
);

export default Home;
