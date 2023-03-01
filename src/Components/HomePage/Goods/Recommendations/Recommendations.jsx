import React from "react";
import styles from "./Recommendation.module.css";
import { RecommendationsItem } from "./RecommendationItem";
import productJson from "../../../../JSON/product.json";
import { useSelector } from "react-redux";
export const Recommendations = () => {
  const searchValue = useSelector(state => state.searchSlice.search)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.discountTitle}>Рекомендуемые для вас товары</div>
        <div className={styles.discountBlock}>
          {productJson.filter(obj => obj.name.toUpperCase().includes(searchValue.toUpperCase())).map((obj, i) => (
            obj.recommendation = true ?
            <RecommendationsItem key={obj.id} {...obj}  /> : ''
          ))}
        </div>
        <div className={styles.discountGoods}>
          <button className={styles.goodsButton}>Все товары</button>
        </div>
      </div>
    </section>
  );
};
