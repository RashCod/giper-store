import React from "react";
import styles from "./Recommendation.module.css";
import star from "../../../.././img/discount/star.svg";

export const RecommendationsItem = ({
  name,
  img,
  ratings,
  text,
  price,
  id,
  reviews,
}) => {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={img} alt="product" />
      <div className={styles.price}>
        <b className={styles.priceSale}>{price.toLocaleString()} ₽</b>
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
        <button className={styles.button}>В корзину</button>
      </div>
    </div>
  );
};
