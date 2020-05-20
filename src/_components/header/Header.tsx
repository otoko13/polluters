import React from 'react';
import './header.scss';

function Header(): JSX.Element {
  return (
    <div className="Header">
      <div className="logo" />
      <h1 className="title">
        Top 20 Global Polluters
      </h1>
    </div>
  );
}

export default Header;
