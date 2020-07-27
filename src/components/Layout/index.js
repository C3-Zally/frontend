import React from 'react';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <main className='app'>
      {children}
    </main>
  );
}

export default Layout;