import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg from "../../.././img/Baner/baner1.png";
import topImg from "../../.././img/Baner/top.png";
import bottomImg from "../../.././img/Baner/bottom.png";
import styles from "./Baner.module.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay, Pagination } from "swiper";

export const Baner = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.banerBlock}>
          <div className={styles.banerSliderBlock}>
            <Swiper
              modules={[Autoplay, Pagination, A11y]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide>
                <a href="#">
                  <img src={sliderImg} alt="slider" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={sliderImg} alt="slider" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={sliderImg} alt="slider" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.banerItems}>
            <div className={styles.banerTop}>
              <a href="#">
                <img src={topImg} alt="topImg" />
              </a>
            </div>
            <div className={styles.banerBottom}>
              <a href="#">
                <img src={bottomImg} alt="bottomImg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
