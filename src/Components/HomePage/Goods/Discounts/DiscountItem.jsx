import React from "react";
import styles from "./Discounts.module.css";
import star from "../../../.././img/discount/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../.././redux/slices/cartSlice.js";

export const DiscountItem = ({
  name,
  img,
  ratings,
  text,
  price,
  salePrice,
  sale,
  id,
  reviews,
}) => {
  const dispatch = useDispatch();

  const productCount = useSelector((state) =>
    state.cartSlice.product.find((obj) => obj.id == id)
  );

  const addedCount = productCount ? productCount.count : 0;

  const addProductFun = () => {
    const products = {
      name,
      img,
      ratings,
      text,
      price,
      salePrice,
      sale,
      id,
      reviews,
    };
    dispatch(addProduct(products));
  };


  return (
    <div className={styles.product}>
      <b className={styles.sales}>-{sale}%</b>

      <img className={styles.img} src={img} alt="product" />
      <div className={styles.price}>
        <b className={styles.priceSale}>{salePrice.toLocaleString()} ₽</b>
        <span className={styles.oldPrice}>
          {price.toLocaleString()} ₽
          <svg
            width="33"
            height="6"
            viewBox="0 0 37 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="36.8923"
              y2="-0.5"
              transform="matrix(0.99593 -0.0901281 0.0849491 0.996385 0.228027 5.25)"
              stroke="#FF4343"
            />
          </svg>
        </span>
      </div>

      <div className={styles.prodictReviews}>
        <b className={styles.grade}>{ratings}</b>
        <img src={star} alt="star" />
        <a href="#" className={styles.reviews}>
          {reviews} отзывов
        </a>
      </div>
      <div className={styles.productName}>{name}</div>
      <div className={styles.productText}>{text}</div>
      <div className={styles.buttonBlock}>
        <button onClick={addProductFun} className={styles.button}>
          В корзину
          {addedCount > 0 ? <span>{addedCount}</span> : ""}
        </button>
      </div>
    </div>
  );
};
