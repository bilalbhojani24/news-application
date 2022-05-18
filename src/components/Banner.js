import React, { Component } from 'react';
import BannerImage from '../images/banner.jpg';

export class Banner extends Component {
  render() {
    return (
      <div className="banner__section">
        <section className="banner__text">
          <h1>THE YOUNG DEVELOPER Team</h1>
          <h3>Best Developers of the Century :)</h3>
          <button>Service</button>
        </section>
        <section className="banner__image">
          <img src={BannerImage} alt="" width="100%" />
        </section>
      </div>
    );
  }
}

export default Banner;
