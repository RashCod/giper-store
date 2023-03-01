import React from "react";
import styles from './HeaderMenu.module.css'
import pk from '../../../img/headerIMG/pk.svg'
import electro from '../../../img/headerIMG/elektro.svg'
import mikrovol from '../../../img/headerIMG/mikrovol.svg'
import woman from '../../../img/headerIMG/woman.svg'
import man from '../../../img/headerIMG/man.svg'
import baby from '../../../img/headerIMG/baby.svg'
import auto from '../../../img/headerIMG/auto.svg'
import krasota from '../../../img/headerIMG/krasota.svg'
import sport from '../../../img/headerIMG/sport.svg'

export const HeaderMenu = () => {
  return (
    <div className={styles.nav}>
      <h2 className={styles.title}>Популярные категории</h2>
      <ul className={styles.ulList}>
        <li className={styles.item}><img src={pk} alt="pk" /><a href="#">Компьютеры и оргтехника</a></li>
        <li className={styles.item}><img src={electro} alt="pk" /><a href="#">Электроника</a></li>
        <li className={styles.item}><img src={mikrovol} alt="pk" /><a href="#">Бытовая техника</a></li>
        <li className={styles.item}><img src={woman} alt="pk" /><a href="#">Одежда для женщин</a></li>
        <li className={styles.item}><img src={man} alt="pk" /><a href="#">Одежда для мужчин</a></li>
        <li className={styles.item}><img src={baby} alt="pk" /><a href="#">Все для детей</a></li>
        <li className={styles.item}><img src={auto} alt="pk" /><a href="#">Автотовары</a></li>
        <li className={styles.item}><img src={krasota} alt="pk" /><a href="#">Красота и здоровье</a></li>
        <li className={styles.item}><img src={sport} alt="pk" /><a href="#">Спорт и развлечение</a></li>
      </ul>
    </div>
  );
};
