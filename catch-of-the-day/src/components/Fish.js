import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { image, name, desc, price, status } = this.props.fishData;
    const { index } = this.props;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => {
            this.props.addToOrder(index);
          }}
        >
          {isAvailable ? 'Add to Cart' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
