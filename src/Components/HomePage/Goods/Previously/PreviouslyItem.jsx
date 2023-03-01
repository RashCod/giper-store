import React from 'react'
import img from '../../../.././img/headerIMG/prev.png'
import styles from './Previously.module.css'


export const PreviouslyItem = () => {
  return (
  <a className={styles.cursor}href="#">
      <div className={styles.item}>
        <div className={styles.imgBlock}>
   
   <img src={img} alt="product" /></div>
   <div className={styles.infoBlock}>
       <p className={styles.text}>Футболка с дизайнерским принтом Super Shape 01 градиент</p>
       <b className={styles.price}>от 1 999 ₽</b>
   </div>

</div>
  </a>
  )
}


