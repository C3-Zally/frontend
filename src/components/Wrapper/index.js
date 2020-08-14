import React from 'react';
import './Wrapper.scss';
import NavBar from '../NavBar';
import TopBar from '../../ui/TopBar';

const Wrapper = ({ children }) => {
  const navBarLinks = [
    { label: 'Home', to: '/', iconClass: 'icon__home' },
    { label: 'Global', to: '/global', iconClass: 'icon__world' },
    { label: 'Take Care', to: '/take-care', iconClass: 'icon__medical-cross' },
  ];
  return (
    <main className='Wrapper'>
      <NavBar links={navBarLinks} />
      <section className='Wrapper__content'>
        <TopBar />
        {children}
      </section>
    </main>
  );
};

export default Wrapper;
