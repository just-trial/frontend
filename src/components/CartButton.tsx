import { useState } from 'react';
import './CartButton.css'; // Import the CSS for this component

const CartButton = () => {
  const [items] = useState([])
  return (
    <div className="cart-container">
      <img src="/cart.svg" alt="Cart" className="cart-icon" />
      {<span className="item-count">{items.length}</span>}
    </div>
  );
};

export default CartButton;