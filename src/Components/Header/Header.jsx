import React from "react";
import burgerMenu from "../.././img/headerIMG/burgerMenu.png";
import logo from "../.././img/headerIMG/Logo.svg";
import user from "../.././img/headerIMG/user.svg";
import heart from "../.././img/headerIMG/heart.svg";
import cart from "../.././img/headerIMG/cart.svg";
import styles from "./Header.module.css";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { Link } from "react-router-dom";
import red from "../.././img/headerIMG/1.svg";
import { useSelector } from "react-redux";
import { Search } from "./Search/Search";

export const Header = () => {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);

  function openMenu() {
    setActiveMenu(!activeMenu);
  }

  return (
    <header onClick={() => setActiveMenu(false)} className={styles.header}>
      <div className="container">
        {/* <div className={styles.headerTop}></div> */}
        <div className={styles.headerBottom}>
          <div onClick={(e) => e.stopPropagation()} className={styles.navMenu}>
            <img onClick={openMenu} src={burgerMenu} alt="burgerMenu" />
            {activeMenu ? <HeaderMenu /> : ""}
          </div>
          <div className={styles.logoBlock}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Search />
          <div className={styles.cartBlock}>
            <Link to="/user" className={styles.user}>
              <img src={user} alt="user" /> Войти
            </Link>
            <div className={styles.heart}>
              <img src={heart} alt="heart" /> Избранное
            </div>
            <Link to="/cart" className={styles.cart}>
              {totalPrice ? (
                <img className={styles.red} src={red} alt="red" />
              ) : (
                ""
              )}
              <img src={cart} alt="cart" /> Корзина
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
