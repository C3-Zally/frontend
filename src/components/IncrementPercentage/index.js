import React from 'react'
import classNames from 'classnames'

import './IncrementPercentage.scss'

export const IncrementPercentage = (props) => {
	const {
		ipMain,
		ipValue,
		colorConfirmed,
		colorDeaths,
		incrementPercentage__iconRed,
		incrementPercentage__iconGreen,
		icon__chevronsUp,
		icon__chevronsDown,
	} = props
	const ipClass = classNames('increment-percentage', { ipMain })
	const valueClass = classNames('increment-percentage__value', {
		'increment-percentage__value--color-confirmed': colorConfirmed,
		'increment-percentage__value--color-deaths': colorDeaths,
	})
	const chevronClass = classNames('increment-percentage__icon', {
		'increment-percentage__icon--red': incrementPercentage__iconRed,
		'icon__chevrons--up': icon__chevronsUp,
		'increment-percentage__icon--green': incrementPercentage__iconGreen,
		'icon__chevrons--down': icon__chevronsDown,
	})
	return (
		<div className={ipClass}>
			<div className={valueClass}>{ipValue}%</div>
			<i className={chevronClass}></i>
		</div>
	)
}
