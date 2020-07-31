import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './NavBar.scss';
import logoFull from '../../assets/logo.svg';

export const NavBar = () => {
  const [expanded, setExpanded] = useState(true);

  const handleExpantion = () => {
    setExpanded(!expanded);
  }

  const NavBarClasses = classNames('NavBar', {
    'isContracted': !expanded,
  })

  return (
    <nav className={NavBarClasses}>
      <div className="NavBar__trigger" onClick={handleExpantion}>
        {expanded ?
          <i className="icon__arrow-narrow--left"></i> :
          <i className="icon__arrow-narrow--right"></i>
        }
      </div>
        <div className='NavBar__logo'>
          {expanded ? <img src={logoFull} alt='Hope Tracker' /> : <i className='icon__brand'></i> }
        </div>
        <ul className='NavBar__list'>
          <li className="NavBar__item">
            <Link className="NavBar__link" to='/'>
              <i className='icon__home'></i>
              {expanded && <span>Home</span>}
            </Link>
          </li>
          <li className="NavBar__item">
            <Link className="NavBar__link" to='/global'>
              <i className='icon__world'></i>
              {expanded && <span>Global</span>}
            </Link>
          </li>
          <li className="NavBar__item">
            <Link className="NavBar__link" to='/take-care'>
              <i className='icon__medical-cross'></i>
              {expanded && <span>Take Care</span>}
            </Link>
          </li>
        </ul>
    </nav>
  )
}