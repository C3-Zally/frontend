import React, { useState, useEffect } from 'react'
import Countries from '../../utility/countries'
import { IncrementPercentage } from '../IncrementPercentage'
import { DataCard } from  '../DataCard'

import './MainBanner.scss'

const randomImage = Math.floor(Math.random() * 10)

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
	} = props
	const [country, setCountry] = useState('')
	const API = 'https://api.unsplash.com/search/photos?client_id=rTLPnTqzq-rK3TnatKGFvmVeFGaZeYToaKUyzwcJOiA&query='
	const countryReference = Countries.getByAlphaCode(alpha2Code)

	useEffect(() => {
		const countryImageContainer = document.querySelector('.country-image')
		fetch(`${API}${countryReference.name}`)
			.then(res => res.json())
			.then(data => setCountry(data.results[randomImage].urls.regular))
			.then(countryImageContainer.style.backgroundImage = `url(${country})`)
	}, [country, countryReference.name])

	return (
		<React.Fragment>
			<section className="main-banner">
				<div className="country-image"></div>

				<ul className="menu">
					<li>
						<button className="menu__button menu__button--active">Total</button>
					</li>
					<li>
						<button className="menu__button">Per 1 million people</button>
					</li>
				</ul>

				<div className="country">
					<img src={countryReference.flag} alt={countryReference.name} className="country__flag" />
					<h4 className="country__name">{countryReference.name}</h4>
				</div>

				<IncrementPercentage
					ipMain
					ipValue={incrementPercentageValue}
					incrementPercentageIcon={incrementPercentageIcon}
					incrementPercentageIconColor={incrementPercentageIconColor}
				/>

				<DataCard dataCardRecovered name="RECOVERED" value={recoveredValue} />

				<DataCard
					dataCardConfirmed
					colorConfirmed
					isNotRecover
					name="CONFIRMED"
					value={confirmedValue}
					ipValue={confirmedPercentage}
					incrementPercentageIcon={confirmedIcon}
					incrementPercentageIconColor={confirmedIconColor}
				/>
				<DataCard
					dataCardDeaths
					colorDeaths
					isNotRecover
					name="DEATHS"
					value={deathsValue}
					ipValue={deathsPercentage}
					incrementPercentageIcon={deathsIcon}
					incrementPercentageIconColor={deathsIconColor}
				/>
			</section>
		</React.Fragment>
	)
}

export default MainBanner