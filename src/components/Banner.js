import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BannerImage from '../images/banner.jpg';
import Button from './Button';

const SVGLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1v1.5zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z" />
    </g>
  </svg>
);

const SVGLogoVar = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1v1.5zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z" />
    </g>
  </svg>
);

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <section className="banner__text">
          <h2>Welcome To Taza Khabar</h2>
          <h3>Some text....!!</h3>
          {/* <Link to="/contact">Explore News</Link> */}
          <Button buttonText="Explore News" />
        </section>
        <section className="banner__img">
          <img
            src={require('../images/banner.jpg')}
            alt="banner--logo"
            width="100%"
          />
          {/* {SVGLogo()} */}
          {/* {SVGLogoVar} */}
        </section>
      </div>
    );
  }
}

export default Banner;

// To use image
// 1. import image from folder and pass it as src={ImageName} - Recomm
// 2. relative path with require keyword src={require('../images/image.png')} - nor recommened
// 3. SVG usage it can be variable {varName} or function {funName()}
// 4. Direct url (CDN)

// When ur state is independent(parent is not manipulating) from parent define it in child
// When ur state is dependent (its value can be updated from parent / child) define it in parent component component

// When ur state value is getting updated(Set state) only in current component define here
// When you want to give control to parent component to update the state and pass to child define in parent component
