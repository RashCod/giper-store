import React from "react";
import { Link } from "react-router-dom";
import cartEmpty from "../../.././img/emptyCart.png"
import styles from './CartEmpty.module.css'
export const CartEmpty = () => {
  return (
    <div class={styles.empty}>
    <div className={styles.emptyBlock}>
    <h2>
        Корзина пустая <span>😕</span>
      </h2>
     
    </div>
    
    <img className={styles.cartEmpty} src={cartEmpty} alt="empty cart" />
    <Link to='/' class={styles.button}>
        Вернуться назад
      </Link>
    </div>
  );
};
