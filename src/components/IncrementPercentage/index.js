import React from 'react';
import classNames from 'classnames';

import './IncrementPercentage.scss';

export const IncrementPercentage = (props) => {
  const {
    ipMain,
    ipValue,
    colorConfirmed,
    colorDeaths,
    incrementPercentageIcon,
    incrementPercentageIconColor,
  } = props;
  const ipClass = classNames('increment-percentage', { ipMain });
  const valueClass = classNames('increment-percentage__value', {
    'increment-percentage__value--color-confirmed': colorConfirmed,
    'increment-percentage__value--color-deaths': colorDeaths,
  });
  let chevronClass = 'increment-percentage__icon';
  if (incrementPercentageIcon === 'up') chevronClass += ' icon__chevrons--up';
  else if (incrementPercentageIcon === 'down')
    chevronClass += ' icon__chevrons--down';

  if (incrementPercentageIconColor === 'red')
    chevronClass += ' increment-percentage__icon--red';
  else if (incrementPercentageIconColor === 'green')
    chevronClass += ' increment-percentage__icon--green';

  return (
    <div className={ipClass}>
      <div className={valueClass}>{ipValue}%</div>
      <i className={chevronClass}></i>
    </div>
  );
};
