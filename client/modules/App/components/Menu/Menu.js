import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/">Posts</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
};

Menu.propTypes = {
};

export default Menu;
