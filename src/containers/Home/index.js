import React from 'react';
import MainBanner from '../../components/MainBanner';
import TitleSection from '../../components/TitleSection';
import ProgressChart from '../../components/ProgressChart';
import GlobalMap from '../../components/GlobalMap';

const Home = () => (
  <>
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
    <TitleSection title='New Cases' infoButton />
    <ProgressChart />
    <GlobalMap />
  </>
);

export default Home;
