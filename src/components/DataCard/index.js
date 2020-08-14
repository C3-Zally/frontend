import React from 'react';
import classNames from 'classnames';
import { IncrementPercentage } from '../IncrementPercentage';
import numberConverter from '../../utility/numberConverter';

import './DataCard.scss';

export const DataCard = (props) => {
  const {
    isNotRecover,
    name,
    value,
    dataCardRecovered,
    dataCardConfirmed,
    dataCardDeaths,
    ipValue,
    colorConfirmed,
    colorDeaths,
    incrementPercentageIcon,
    incrementPercentageIconColor,
  } = props;

  const dataCardClass = classNames('data-card', {
    dataCardRecovered,
    dataCardConfirmed,
    dataCardDeaths,
  });

  let valueClass = 'value';

  if (value.length > 5) {
    valueClass += ' small';
  }

  return (
    <div className={dataCardClass}>
      <p className='name'>{name}</p>
      <div className='flex-container'>
        <p className={valueClass}>{numberConverter(value)}</p>
        {isNotRecover && (
          <IncrementPercentage
            ipValue={ipValue}
            colorConfirmed={colorConfirmed}
            colorDeaths={colorDeaths}
            incrementPercentageIcon={incrementPercentageIcon}
            incrementPercentageIconColor={incrementPercentageIconColor}
          />
        )}
      </div>
    </div>
  );
};
