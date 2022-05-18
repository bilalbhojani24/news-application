import React, { Component } from 'react';

export class Card extends Component {
  render() {
    const { imgUrl, title, author, url } = this.props;
    return (
      <div className="news__card">
        <img src={imgUrl} alt={imgUrl} />
        <div style={{ padding: '10px' }}>
          <h3>{title}</h3>
          <h5>{author}</h5>
          <section className="btn__sec">
            <button
              onClick={() => {
                window.open(url);
              }}
            >
              Read More...
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default Card;
