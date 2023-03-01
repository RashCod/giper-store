import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { CartEmpty } from "./CartEmpty/CartEmpty";

export const Cart = () => {
  const { product, totalPrice } = useSelector((state) => state.cartSlice);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.cartBlock}>
      <div className="container">
        <div className={styles.cartTitle}>Корзина</div>
        <div className={styles.cart}>
          <div className={styles.productInfo}>
            <b className={styles.productName}>Название</b>
            <b className={styles.productPrice}>Цена</b>
            <b className={styles.productQuantity}>Количество</b>
          </div>
          {product.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))}
          <div className={styles.totalBlock}>
            <div className={styles.backBlock}>
              <Link to="/" className={styles.back}>
                Назад
              </Link>
            </div>
            <div className={styles.paymentBlock}>
              <h2 className={styles.totalTitle}>Итог</h2>
              <h2 className={styles.totalPrice}>{totalPrice.toLocaleString()} ₽</h2>
              <button className={styles.btn}>Оплатить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
