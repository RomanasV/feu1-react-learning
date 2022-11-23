import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/shopping-list'>Shopping List</Link></li>
      <li><Link to='/todo'>Todo</Link></li>
      <li><Link to='/cars'>Cars</Link></li>
      <li><Link to='/cities'>Cities</Link></li>
    </ul>
  )
}

export default Navigation