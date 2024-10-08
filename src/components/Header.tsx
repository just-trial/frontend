import { useState } from 'react';
import './Header.css';
import LoginButton from './LoginButton';
import CartButton from './CartButton';


const Header = () => {
  const [quote] = useState(5.53)
  return (
      <div className="header">
        <img src="/logo.svg" alt="logo"/>
        <nav>
          <div>
            <p className='p4'>Cotação dólar hoje: R${quote}</p>
          </div>
          <img src="/flag.svg"></img>
          <img src="/help.svg"></img>
          <div className="separator"></div>
          <LoginButton/>
          <CartButton/>
        </nav>
      </div>
  );
};

export default Header;