import React from "react";
import styles from "./Novelties.module.css";
import productJson from '../../../../JSON/product.json'
import { NoveltiesItem } from "./NoveltiesItem";
import { useSelector } from "react-redux";


export const Novelties = () => {
  const searchValue = useSelector(state => state.searchSlice.search)

    return (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.discountTitle}>Новинки</div>
            <div className={styles.discountBlock}>
           {
            
            productJson.filter(obj => obj.name.toUpperCase().includes(searchValue.toUpperCase())).map((obj, i) => obj.novel ? <NoveltiesItem  key={obj.id} {...obj}/> : '')
            
           }
            </div>
            <div className={styles.discountGoods}><button className={styles.goodsButton}>Все товары</button></div>
          </div>
        </section>
      );
}
