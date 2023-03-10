import React from "react";
import virusImg from "./assets/img/virus.png";
import maskImg from "./assets/img/mamska.svg";
import smileImg from "./assets/img/smile.png";
import umerImg from "./assets/img/banned.png";
import cardImg from "./assets/img/section-img.jpg";

const main = () => {
  return (
    <section>
      <div className="container">
        <div className="container-info">
          <div className="container-info__first">
            <img src={virusImg} alt="" />
            <p>
              Коронавирус COVID-19 <span className="block">в Узбекистане</span>
            </p>
          </div>
          <div className="container-info__first">
            <img src={maskImg} alt="" />
            <p>
              Инфицированы
              <span className="block">2753</span>
            </p>
          </div>{" "}
          <div className="container-info__first">
            <img src={smileImg} alt="" />
            <p>
              Выздоровели
              <span className="block">2245 </span>
            </p>
          </div>{" "}
          <div className="container-info__first">
            <img src={umerImg} alt="" />
            <p>
              Умерли
              <span className="block">12</span>
            </p>
          </div>
        </div>
        <div className="container__cards">
          <div className="container__card">
            <div className="container__card__top">
              <img src={cardImg} alt="" />
            </div>
            <div className="container__card__bottom">
              <p>Карантин в Узбекистане продлен до 1 июня</p>
              <span>05:28 / 16.05.2020</span>
            </div>
          </div>

          <div className="container__card">
            <div className="container__card__top">
              <img src={cardImg} alt="" />
            </div>
            <div className="container__card__bottom">
              <p>
                Обмелевшая Сардоба: стихия или
                <span>человеческий фактор?</span>
              </p>
              <span>05:28 / 16.05.2020</span>
            </div>
          </div>

          <div className="container__card">
            <div className="container__card__top">
              <img src={cardImg} alt="" />
            </div>
            <div className="container__card__bottom">
              <p>
                Следствие проверяет четыре версии
                <span>прорыва Сардобинской плотины</span>
              </p>
              <span>05:28 / 16.05.2020</span>
            </div>
          </div>

          <div className="container__card">
            <div className="container__card__top">
              <img src={cardImg} alt="" />
            </div>
            <div className="container__card__bottom">
              <p>Выявлено еще 7 случаев коронавируса</p>
              <span>05:28 / 16.05.2020</span>
            </div>
          </div>

          <div className="container__card">
            <div className="container__card__top">
              <img src={cardImg} alt="" />
            </div>
            <div className="container__card__bottom">
              <p>Итоги второго месяца карантина</p>
              <span>05:28 / 16.05.2020</span>
            </div>
          </div>

          <div className="container__card">
            <div className="container__card__top">
              <img src={cardImg} alt="" />
            </div>
            <div className="container__card__bottom">
              <p>Итоги второго месяца карантина</p>
              <span>05:28 / 16.05.2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default main;
