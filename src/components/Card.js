import React, { Component } from 'react';
import Button from './Button';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      hide: true,
    };
  }
  render() {
    const { imgUrl, title, description, url } = this.props;
    return (
      <div className="news__card">
        <img src={imgUrl} alt="" width="100%" />
        <div style={{ padding: '10px' }}>
          {this.state.hide ? (
            <>
              <h4>{title}</h4>
              <p>{description}</p>
            </>
          ) : null}
          <Button
            buttonText="Read More"
            onClick={() => {
              window.open(url);
            }}
          />
          {/* <Button
            buttonText="Toggle view"
            onClick={() => {
              this.setState({ hide: !this.state.hide });
            }}
          /> */}
        </div>
      </div>
    );
  }
}

export default Card;
