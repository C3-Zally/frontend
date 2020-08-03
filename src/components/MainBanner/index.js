import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IncrementPercentage } from '../IncrementPercentage'
import { DataCard } from  '../DataCard'

import './MainBanner.scss'
import mexicoImage from '../../assets/mexico.jpg'

export const MainBanner = () => {
	const [country, setCountry] = useState([])
	const API = 'https://api.unsplash.com/search/photos?client_id=rTLPnTqzq-rK3TnatKGFvmVeFGaZeYToaKUyzwcJOiA&query='
	const exampleCountry = 'mexico'

	useEffect(() => {
		window.fetch(`${API}${exampleCountry}`)
			.then(res => res.json())
			.then(response => {
				setCountry(response)
			})
	}, [])

	useEffect(() => {
		const countryImage = document.querySelector('.country-image')
		countryImage.style.backgroundImage = `url(${mexicoImage})`
	})

	return (
		<React.Fragment>
			<h2>Overview</h2>
			<section className="main-banner">
				<div className="country-image"></div>
				<ul className="menu">
					<li>
						<Link to="/" className="menu__link menu__link--active">Total</Link>
					</li>
					<li>
						<Link to="/" className="menu__link">Per 1 million people</Link>
					</li>
				</ul>
				<div className="country">
					<img src="https://restcountries.eu/data/mex.svg" alt="Mexico" className="country__flag" />
					<h4 className="country__name">Mexico</h4>
				</div>
				<IncrementPercentage ipValue="23" ipMain icon__chevronsUp incrementPercentage__iconGreen />
				<DataCard name="RECOVERED" value="208K" dataCardRecovered />
				<DataCard
					name="CONFIRMED"
					value="331K"
					ipValue="14"
					isNotRecover
					dataCardConfirmed
					colorConfirmed
					incrementPercentage__iconRed
					icon__chevronsUp
				/>
				<DataCard
					name="DEATHS"
					value="38K"
					ipValue="8"
					isNotRecover
					dataCardDeaths
					colorDeaths
					incrementPercentage__iconGreen
					icon__chevronsDown
				/>
			</section>
		</React.Fragment>
	)
}