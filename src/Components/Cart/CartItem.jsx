import React, { useRef } from "react";
import styles from "./Cart.module.css";
import removeImg from "../.././img/remove.png";
import { useDispatch } from "react-redux";
import {
  deletedProduct,
  addProduct,
  minusProd,
} from "../.././redux/slices/cartSlice";

export const CartItem = ({
  name,
  img,
  ratings,
  text,
  price,
  salePrice,
  sale,
  id,
  reviews,
  count,
}) => {
  const dispatch = useDispatch();
  const minusRef = useRef();
  const onClickRemove = () => {
    if (window.confirm("Ты действительно хочешь удалить?")) {
      dispatch(deletedProduct(id));
    }
  };

  const onClickPlus = () => {
    dispatch(
      addProduct({
        id,
      })
    );
  };

  const onClickMinus = () => {
    if (count === 1) {
      minusRef.current.disabled();
    }
    dispatch(minusProd(id));
  };

  return (
    <div className={styles.products}>
      <div className={styles.leftProduct}>
        <img src={img} alt="products" />
        <div className={styles.prodDiv}>
          <h2 className={styles.prodName}>{name}</h2>
          <p className={styles.prodInfo}>{text}</p>
        </div>
      </div>
      <div className={styles.rightProduct}>
        <b className={styles.prodPrice}>{price.toLocaleString() && salePrice.toLocaleString()} ₽</b>
        <b className={styles.prodQuantuty}>
       <div className={styles.countBlock}>
       <b onClick={onClickMinus} ref={minusRef} className={styles.minus}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M512 32C248 32 32 248 32 512s216 480 480 480 480-216 480-480S776 32 512 32z"
                fill="#FFFFFF"
              />
              <path
                d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 992C248 992 32 776 32 512S248 32 512 32s480 216 480 480-216 480-480 480z"
                fill=""
              />
              <path
                d="M512 512m-392 0a392 392 0 1 0 784 0 392 392 0 1 0-784 0Z"
                fill="#9DE8F7"
              />
              <path d="M240 496h544v32H240z" fill="#1A1718" />
            </svg>
          </b>
          <span className={styles.cartCount}>{count}</span>
          <b onClick={onClickPlus} className={styles.plus}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M512 32C248 32 32 248 32 512s216 480 480 480 480-216 480-480S776 32 512 32z"
                fill="#FFFFFF"
              />
              <path
                d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 992C248 992 32 776 32 512S248 32 512 32s480 216 480 480-216 480-480 480z"
                fill=""
              />
              <path
                d="M512 512m-392 0a392 392 0 1 0 784 0 392 392 0 1 0-784 0Z"
                fill="#9DE8F7"
              />
              <path
                d="M784 496H528V240h-32v256H240v32h256v256h32V528h256z"
                fill="#1A1718"
              />
            </svg>
          </b>
       </div>
        </b>
        <img
          onClick={onClickRemove}
          className={styles.remove}
          src={removeImg}
          alt="delete"
        />
      </div>
    </div>
  );
};
