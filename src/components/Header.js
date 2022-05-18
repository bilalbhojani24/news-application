import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <h3>
          <Link className="link__class" to="/">
            News App
          </Link>
        </h3>
        <ul>
          <li>
            <Link className="link__class" to="/general">
              General
            </Link>
          </li>
          <li>
            <Link className="link__class" to="/business">
              Business
            </Link>
          </li>
          <li>
            <Link className="link__class" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li>
            <Link className="link__class" to="/science">
              Science
            </Link>
          </li>
          <li>
            <Link className="link__class" to="/technology">
              Technology
            </Link>
          </li>
          <li>
            <Link className="link__class" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
