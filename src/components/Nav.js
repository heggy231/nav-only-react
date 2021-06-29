import React from 'react';

function Nav() {
  return (
    <header>
      <nav className="nav y-wrap">
        <ul className="navs">
          <li>Home</li>
          <li>About</li>
        </ul>
        <ul className="navs">
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;