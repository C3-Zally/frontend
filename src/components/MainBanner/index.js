import React from 'react';
import Countries from '../../utility/countries';
import { IncrementPercentage } from '../IncrementPercentage';
import { DataCard } from '../DataCard';
import { useCountryImage } from '../../hooks/useCountryImage';
import { Loader } from '../Loader';

import './MainBanner.scss';

const MainBanner = (props) => {
  const {
    alpha2Code,
    incrementPercentageValue,
    incrementPercentageIcon,
    incrementPercentageIconColor,
    recoveredValue,
    confirmedValue,
    confirmedPercentage,
    confirmedIcon,
    confirmedIconColor,
    deathsValue,
    deathsPercentage,
    deathsIcon,
    deathsIconColor,
  } = props;

  const countryReference = Countries.getByAlphaCode(alpha2Code);

  const { countryImage, error, isLoading } = useCountryImage(
    countryReference.name
  );
  const ImageCountry = ({ background }) => {
    let styles = {
      backgroundImage: error
        ? `url(${countryReference.flag})`
        : `url(${background})`,
    };
    return (
      <div className='country-image' style={styles}>
        {isLoading && <Loader />}
      </div>
    );
  };

  return (
    <>
      <section className='main-banner'>
        <ImageCountry background={countryImage} />
        <ul className='menu'>
          <li>
            <button className='menu__button menu__button--active'>Total</button>
          </li>
          <li>
            <button className='menu__button'>Per 1 million people</button>
          </li>
        </ul>

        <div className='country'>
          <img
            src={countryReference.flag}
            alt={countryReference.nativeName}
            className='country__flag'
          />
          <h4 className='country__name'>{countryReference.name}</h4>
        </div>

        <IncrementPercentage
          ipMain
          ipValue={incrementPercentageValue}
          incrementPercentageIcon={incrementPercentageIcon}
          incrementPercentageIconColor={incrementPercentageIconColor}
        />

        <DataCard dataCardRecovered name='RECOVERED' value={recoveredValue} />

        <DataCard
          dataCardConfirmed
          colorConfirmed
          isNotRecover
          name='CONFIRMED'
          value={confirmedValue}
          ipValue={confirmedPercentage}
          incrementPercentageIcon={confirmedIcon}
          incrementPercentageIconColor={confirmedIconColor}
        />
        <DataCard
          dataCardDeaths
          colorDeaths
          isNotRecover
          name='DEATHS'
          value={deathsValue}
          ipValue={deathsPercentage}
          incrementPercentageIcon={deathsIcon}
          incrementPercentageIconColor={deathsIconColor}
        />
      </section>
    </>
  );
};

export default MainBanner;
