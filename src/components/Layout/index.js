import React from 'react';
import './Layout.scss';
import { NavBar } from '../NavBar';

const Layout = ({children}) => {
  return (
    <main className='Layout__wrapper'>
      <NavBar />
      <section className='Layout__content'>
        {children}
      </section>
    </main>
  );
}

export default Layout;