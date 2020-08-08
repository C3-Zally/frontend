import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './NavBar.scss';

const NavBar = ({ links }) => {
  const [expanded, setExpanded] = useState(false);

  const NavBarItem = ({ item }) => (
    <li className='NavBar__item'>
      <Link className='NavBar__link' to={item.to}>
        <i className={item.iconClass}></i>
        {expanded && <span>{item.label}</span>}
      </Link>
    </li>
  );

  const handleExpantion = (e) => {
    setExpanded(!expanded);
  };

  const NavBarClasses = classNames('NavBar', {
    isContracted: !expanded,
  });

  return (
    <nav className={NavBarClasses}>
      <div className='NavBar__trigger' onClick={handleExpantion}>
        {expanded ? (
          <i className='icon__arrow-narrow--left'></i>
        ) : (
          <i className='icon__arrow-narrow--right'></i>
        )}
      </div>
      <div className='NavBar__logo'></div>
      <ul className='NavBar__list'>
        {links.map((link) => (
          <NavBarItem item={link} key={link.label} />
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
