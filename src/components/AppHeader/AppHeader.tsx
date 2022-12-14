import React from 'react';
import './AppHeader.scss';
import burgerMain from '../../assets/image/btn/btn-burger.png';
import {BsCart4} from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {cartSelector} from "../../redux-toolkit/cart/cartSlice.js";


export function AppHeader(): React.ReactComponentElement<any> {
  const {pathname} = useLocation();
  
  
  const {items, totalPrice} = useSelector(cartSelector);
  const totalCartCount = items.reduce((acc: number, item: {count: number}) => {
    return acc + item.count
  }, 0);
  
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <div className="header__logo-img">
            <img src={burgerMain} width="50" alt="pizza-main"/>
          </div>
          <span>iBurgeR</span>
        </div>
      </Link>
      
      {
        pathname === "/cart"
        ? null
  
        : (<Link to="cart" className="header__a">
            <div className="header__cart">
              <div className="header__cart-sum">
                {/*<span>{totalPrice}&nbsp; &#8381;</span>*/}
                <span>&nbsp;&#8364;&nbsp;{(totalPrice / 70).toFixed(2)}&nbsp;</span>
              </div>
              <div className="header__cart-icon">
                <BsCart4/>
                <span>{totalCartCount}</span>
              </div>
            </div>
          </Link>)
      }
    
    </div>
  );
}
