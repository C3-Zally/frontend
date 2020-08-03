import React from 'react'
import classNames from 'classnames'
import { IncrementPercentage } from '../IncrementPercentage'

import './DataCard.scss'

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
		incrementPercentage__iconGreen,
		incrementPercentage__iconRed,
		icon__chevronsUp,
		icon__chevronsDown,
	} = props
	const dataCardClass = classNames('data-card', {
		dataCardRecovered,
		dataCardConfirmed,
		dataCardDeaths,
	})
	return (
		<div className={dataCardClass}>
			<p className="name">{name}</p>
			<div className="flex-container">
				<p className="value">{value}</p>
				{isNotRecover &&
					<IncrementPercentage
						ipValue={ipValue}
						colorConfirmed={colorConfirmed}
						colorDeaths={colorDeaths}
						incrementPercentage__iconGreen={incrementPercentage__iconGreen}
						incrementPercentage__iconRed={incrementPercentage__iconRed}
						icon__chevronsUp={icon__chevronsUp}
						icon__chevronsDown={icon__chevronsDown}
					/>
				}
			</div>
		</div>
	)
}