import React from "react";
import styles from './Information.module.css'

export const Information = () => {
    const [activeInfo,setActiveInfo] = React.useState(false)
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.title}>Широкий ассортимент и высокое качество</div>
        <div className={styles.text}>
          Интернет-магазин PlaceMik – это доступные цены, широкий, регулярно
          обновляемый ассортимент. В онлайн-каталоге PlaceMik представлено около
          35 000 ведущих брендов женской, мужской и детской одежды и обуви.
          Покупателям предлагается электроника, книжная продукция, детские
          товары. В интернет-магазине можно приобрести продукцию для дома,
          продукты питания, товары для красоты, ювелирные изделия, игрушки. Для
          удобства пользования онлайн-каталог поделен на разделы, все товары
          можно сортировать по ряду критериев: цена, материал изготовления,
          <p className={activeInfo ? [styles.active] [styles.textOpacity] : [styles.textOpacity]}>
            сезонность, бренд. Интернет-магазин PlaceMik регулярно проводит
            масштабные распродажи. В рамках таких акций предоставляются большие
            скидки (до 95%) на одежду, обувь, детские товары.Условия распродаж
            распространяютс я и на электронику, продукты питания, товары для
            дома, книги и многое другое.
          </p>
        </div>
        <div onClick={()=> setActiveInfo(!activeInfo)} className={styles.button}>Читать полностью<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.12542 5.35919L0.839411 0.66678C0.67602 0.502972 0.410934 0.502972 0.247543 0.66678C0.0841523 0.830587 0.0841523 1.09651 0.247543 1.26032L4.80823 6.25366C4.89534 6.34119 5.01121 6.37829 5.12499 6.37245C5.2392 6.37829 5.35465 6.34119 5.44177 6.25366L10.0024 1.26032C10.1658 1.09651 10.1658 0.830587 10.0024 0.66678C9.83907 0.502972 9.57397 0.502972 9.41059 0.66678L5.12542 5.35919Z" fill="black"/>
</svg></div>
      </div>
    </section>
  );
};
