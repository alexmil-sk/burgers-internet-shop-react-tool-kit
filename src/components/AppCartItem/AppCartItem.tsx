import React from 'react';
import classes from "./AppCartItem.module.scss";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {removeItemBurger, addItemBurger, addCartDecrement} from "../../redux-toolkit/cart/cartSlice.js";
import {AppCartItemProps, BurgerInfo} from "../../@types/types";
import {useAppDispatch} from "../../redux-toolkit/store";



export const AppCartItem: React.FC<AppCartItemProps> = ({item}:AppCartItemProps) => {
  
  const {id, name, imageUrl, price, type, size, count} = item;
  const dispatch = useAppDispatch();
  
  function removeBurgerFromCart(id: string) {
    if(window.confirm('Are you sure you want to remove')) {
      dispatch(removeItemBurger(id));
    }
  }
  
  return (
    <>
      <div className={classes.cartItem}>
        <div className={classes.cartItemImg}>
          <img src={imageUrl} width="70" alt="burger-main"/>
        </div>
        <div className={classes.cartItemTitle}>
          <p>{name}</p>
          <span>{type}&nbsp;, {size}&nbsp;cm</span>
        </div>
        <div className={classes.cartItemCount}>
            <AiOutlineMinusCircle
              className={count === 1 ? classes.MinusCircleDisabled : classes.MinusCircle}
              onClick={() => dispatch(addCartDecrement(id))}
            />
         
          <span>{count}</span>
          <AiOutlinePlusCircle
            className={classes.PlusCircle}
            onClick={() =>  dispatch(addItemBurger({id} as  BurgerInfo))}
          />
        </div>
        <div className={classes.cartItemPrice}>
          <span>&nbsp;&#8364;&nbsp;{((price * count) / 70).toFixed(2)}&nbsp;</span>
        </div>
        <div
          className={classes.cartItemDel}
          onClick={() => removeBurgerFromCart(id)}
            >
          <AiOutlineCloseCircle className={classes.Close}/>
        </div>
      </div>
      
    </>
  );
}
