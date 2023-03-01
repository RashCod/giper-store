import React from "react";
import styles from "./Discounts.module.css";
import productJson from '../../../../JSON/product.json'
import { DiscountItem } from "./DiscountItem";
import Skeleton from "../../../Skeleton/Skeleton";
import { useSelector } from "react-redux";

export const Discounts = () => {
  const [loading, isLoading] = React.useState(true);
  const searchValue = useSelector(state => state.searchSlice.search)

  setTimeout(() => {
    isLoading(false);
  }, 2000);

  const skelet = [...Array(12)].map((_, index) => <Skeleton />);
  const discount = productJson.filter(obj => {
    if(obj.name.toUpperCase().includes(searchValue.toUpperCase())){
      return true
    }
  }).map((obj, i) => ( obj.sale ?
    <DiscountItem key={obj.id} {...obj} /> : ''
  ));

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.discountTitle}>Успей купить</div>
        <div className={styles.discountBlock}>{loading ? skelet : discount}</div>
        <div className={styles.discountGoods}>
          <button className={styles.goodsButton}>Все товары</button>
        </div>
      </div>
    </section>
  );
};
