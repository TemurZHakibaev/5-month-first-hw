import React from "react";
import "./index.css";
import logo from "./assets/img/logo.svg";
import tgLogo from "./assets/img/tg.png";
import headerBanner from "./assets/img/nrg-banner.png";

const dollar = 10137.2;
const rubl = 138.26;
const euro = 10988.72;
const header = () => {
  return (
    <header className="App-header">
      <div className="container">
        <div className="container__top">
          <div className="logo__left">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <p>{dollar}</p>
            <p>{rubl}</p>
            <p>{euro}</p>
          </div>
          <div className="logo__right">
            <button>
              <img src={tgLogo} alt="" />
              <p>Подписаться</p>
            </button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Узбекистана</a>
            </li>
            <li>
              <a href="#">Мир</a>
            </li>
            <li>
              <a href="#">Экономика</a>
            </li>
            <li>
              <a href="#">Политика</a>
            </li>
            <li>
              <a href="#">Общество</a>
            </li>
            <li>
              <a href="#">Технологии</a>
            </li>
            <li>
              <a href="#">Спорт</a>
            </li>
            <li>
              <a href="#">Культура</a>
            </li>
            <li>
              <a href="#">Проишествия</a>
            </li>
            <li>
              <a href="#">Туризм</a>
            </li>
          </ul>
        </nav>
        <div className="container__bottom">
          <img src={headerBanner} alt="" />
        </div>
      </div>
    </header>
  );
};

export default header;
