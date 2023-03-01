import React from 'react'
import { PreviouslyItem } from './PreviouslyItem'
import styles from './Previously.module.css'


export const Previously = () => {
  return (
    <section className={styles.previously}>
        <div className="container">
            <div className={styles.title}>Ранее вы смотрели</div>
            <div className={styles.itemBlock}>
               {
                [...new Array(5)].map((_,index) => <PreviouslyItem/>)
               }
            </div>
        </div>
    </section>
  )
}


