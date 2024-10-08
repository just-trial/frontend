import './CartButton.css'; // Import the CSS for this component

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '../redux/cartSlice'; 
import { RootState } from '../redux/store';

const CartButton = () => {
  const dispatch = useDispatch();
  const refetch = useSelector((state: any) => state.cart.items); // Get items from Redux store
  const items = useSelector((state: any) => state.cart.apiItems); // Get items from Redux store
  const cartId = useSelector((state: RootState) => state.cart.cartId);

  // Function to calculate total price
  const totalPrice = items.reduce((total : number, item : any) => total + item.price, 0);

  const [showSummary, setShowSummary] = useState(false);

  // Toggle the summary display on button click
  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  // Fetch the cart items whenever the component is mounted
  useEffect(() => {
    if (cartId) {
      dispatch(fetchCartItems(cartId) as any);
    }
  }, [dispatch, cartId, refetch]);

  return (
    <div className="cart-container" onClick={toggleSummary}>
      <img src="/cart.svg" alt="Cart" className="cart-icon" />
      {<span className="item-count">{items.length}</span>}
      {showSummary && (
       
       <div className="cart-summary">
          <h2>Ingressos</h2>
          {items.length > 0 ? (
            <ul className="cart-items-list">
              {items.map((item : any) => (
                <li key={item.id} className="cart-item">
                  <p className='p4'>{item.name} - {item.city}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem itens no carrinho.</p>
          )}
          Total: <h2 style={{color: '#4070F4'}}>${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default CartButton;