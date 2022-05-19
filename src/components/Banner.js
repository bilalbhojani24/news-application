import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BannerImage from '../images/banner.jpg';
import Button from './Button';
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
          <img src={BannerImage} alt="banner--logo" width="100%" />
        </section>
      </div>
    );
  }
}

export default Banner;
