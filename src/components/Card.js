import React, { Component } from 'react';
import Button from './Button';

export class Card extends Component {
  render() {
    const { imgUrl, title, description, url } = this.props;
    return (
      <div className="news__card">
        <img src={imgUrl} alt="" width="100%" />
        <div style={{ padding: '10px' }}>
          <h4>{title}</h4>
          <p>{description}</p>
          <Button
            buttonText="Read More"
            onClick={() => {
              window.open(url);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Card;
