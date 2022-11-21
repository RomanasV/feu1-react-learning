import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/shopping-list'>Shopping List</Link></li>
    </ul>
  )
}

export default Navigation