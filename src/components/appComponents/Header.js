import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwersomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <nav>
        <link to="/" className="brand-name">
          Bookstore CMS
        </link>
        <link to="/" className="nav-link">
          BOOKS
        </link>
        <link to="/categories" className="nav-link">
          CATEGORIES
        </link>
        <span className="user-icon">
          <FontAwersomeIcon icon={faUser} />
        </span>
      </nav>
    </header>
  );
}

export default Header;