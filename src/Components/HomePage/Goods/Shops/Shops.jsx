import React from 'react'
import styles from './Shops.module.css'
import uniQlo from '../../../.././img/shops/uniqlo.svg'
import uniQlo1 from '../../../.././img/shops/uniqlo1.png'
import uniQlo2 from '../../../.././img/shops/uniqlo2.png'
import uniQlo3 from '../../../.././img/shops/uniqlo3.png'
import huawei from '../../../.././img/shops/huawei.svg'
import huawei1 from '../../../.././img/shops/huawei1.png'
import huawei2 from '../../../.././img/shops/huawei2.png'
import huawei3 from '../../../.././img/shops/huawei3.png'
import berlingo from '../../../.././img/shops/berlingo.svg'
import berlingo1 from '../../../.././img/shops/berlingo1.png'
import berlingo2 from '../../../.././img/shops/berlingo2.png'
import berlingo3 from '../../../.././img/shops/berlingo3.png'
import salesAnimals from '../../../../img/shops/sales1.png'
import salesImg from '../../../../img/shops/sales2.png'
import ukwai from '../../../.././img/shops/ukwai.svg'
import ukwai1 from '../../../.././img/shops/ukwai1.png'
import ukwai2 from '../../../.././img/shops/ukwai2.png'
import ukwai3 from '../../../.././img/shops/ukwai3.png'
import lasie from '../../../.././img/shops/lasie.svg'
import lasie1 from '../../../.././img/shops/lasie1.png'
import lasie2 from '../../../.././img/shops/lasie2.png'
import lasie3 from '../../../.././img/shops/lasie3.png'
import denzel from '../../../.././img/shops/DENZEL.svg'
import denzel1 from '../../../.././img/shops/DENZEL1.png'
import denzel2 from '../../../.././img/shops/DENZEL2.png'
import denzel3 from '../../../.././img/shops/DENZEL3.png'

export const Shops = () => {
  return (
    <section>
         <div className="container">
            <div className={styles.shopsTitle}>Магазины для вас</div>
            <div className={styles.shopsBlock}>
         
            <div className={styles.shopsItem}>
            <a href="#">
            <div className={styles.shopsTop}>
                <img src={uniQlo} alt="uniQlo" />
                <h3 className={styles.title}>UNI QLO</h3>
            </div>
            <div className={styles.shopsBottom}>
            <img src={uniQlo1} alt="uniQlo" />
            <img src={uniQlo2} alt="uniQlo" />
            <img src={uniQlo3} alt="uniQlo" />
            </div>
            </a>
           </div>
           <div className={styles.shopsItem}>
            <a href="#">
            <div className={styles.shopsTop}>
                <img src={huawei} alt="uniQlo" />
                <h3 className={styles.title}>Huawei</h3>
            </div>
            <div className={styles.shopsBottom}>
            <img src={huawei1} alt="uniQlo" />
            <img src={huawei2} alt="uniQlo" />
            <img src={huawei3} alt="uniQlo" />
            </div>
            </a>
           </div>
           <div className={styles.shopsItem}>
            <a href="#">
            <div className={styles.shopsTop}>
                <img src={berlingo} alt="uniQlo" />
                <h3 className={styles.title}>Berlingo</h3>
            </div>
            <div className={styles.shopsBottom}>
            <img src={berlingo1} alt="uniQlo" />
            <img src={berlingo2} alt="uniQlo" />
            <img src={berlingo3} alt="uniQlo" />
            </div>
            </a>
           </div>
           <div className={styles.shopsItemSales}>
            <a href="#">
           <img src={salesAnimals} alt="salesAnimals" />
            </a>
           </div>
           <div className={styles.shopsItem}>
            <a href="#">
            <div className={styles.shopsTop}>
                <img src={ukwai} alt="uniQlo" />
                <h3 className={styles.title}>U-kwai</h3>
            </div>
            <div className={styles.shopsBottom}>
            <img src={ukwai1} alt="uniQlo" />
            <img src={ukwai2} alt="uniQlo" />
            <img src={ukwai3} alt="uniQlo" />
            </div>
            </a>
           </div>
           <div className={styles.shopsItem}>
            <a href="#">
            <div className={styles.shopsTop}>
                <img src={lasie} alt="uniQlo" />
                <h3 className={styles.title}>LASSIE</h3>
            </div>
            <div className={styles.shopsBottom}>
            <img src={lasie1} alt="uniQlo" />
            <img src={lasie2} alt="uniQlo" />
            <img src={lasie3} alt="uniQlo" />
            </div>
            </a>
           </div>
           <div className={styles.shopsItem}>
            <a href="#">
            <div className={styles.shopsTop}>
                <img src={denzel} alt="uniQlo" />
                <h3 className={styles.title}>Densel</h3>
            </div>
            <div className={styles.shopsBottom}>
            <img src={denzel1} alt="uniQlo" />
            <img src={denzel2} alt="uniQlo" />
            <img src={denzel3} alt="uniQlo" />
            </div>
            </a>
           </div>
           <div className={styles.shopsItemSales}>
            <a href="#">
           <img src={salesImg} alt="salesAnimals" />
            </a>
           </div>
        
            </div>
            
            <div className={styles.shopsGoods}><button className={styles.shopsButton}>Все магазины</button></div>
          </div>
    </section>
  )
}
