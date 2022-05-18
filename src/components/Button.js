import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { className = '', buttonText, onClick } = this.props;
    return (
      <button
        className={`${className}`}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {buttonText}
      </button>
    );
  }
}

export default Button;
