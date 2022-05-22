import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            TAZA KHABAsjdfjsbdfjhsdfh
          </Link>
        </h1>
        <ul>
          <li>
            <Link className="anchor__cus" to="/general">
              General
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/science">
              Science
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/health">
              Health
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/sports">
              Sports
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: 'red' } : { color: 'white' }
              }
              className="anchor__cus"
              to="/"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              className="anchor__cus"
              to="/contact"
              style={({ isActive }) =>
                isActive ? { color: 'red' } : { color: 'white' }
              }
            >
              Contact
            </NavLink>
          </li>
        </ul> */}
      </header>
    );
  }
}

export default Header;
