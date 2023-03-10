import React from 'react'
import section2Img from "./assets/img/section-2-img.png"
import tarif from "./assets/img/tarif.png"

const Main2 = () => {
  return (
    <section>
      <div classNmae="container">
        <h2 className="container">Последние новости</h2>
      </div>
      <div className="container">
        <div className="container__left">
          <div className="container__left__card">
            <div className="container__left__card__left">
              <img src={section2Img} alt="" />
            </div>

            <div className="container__left__card__right">
              <h3>По факту прорыва Сардобинского водохранилища
                <span className="block">возбуждено уголовное дело</span></h3>
              <p>После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.
              </p>
              <span>11:31 / 15.05.2020</span>
            </div>
          </div>

          <div className="container__left__card">
            <div className="container__left__card__left">
              <img src={section2Img} alt="" />
            </div>

            <div className="container__left__card__right">
              <h3>Мирзиёев: «Нам следовало бы принять некоторые правила
                <span className="block">карантина как часть повседневной жизни»</span>
              </h3>
              <p>Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.
              </p>
              <span>11:31 / 15.05.2020</span>
            </div>
          </div>

          <div className="container__left__card">
            <div className="container__left__card__left">
              <img src={section2Img} alt="" />
            </div>

            <div className="container__left__card__right">
              <h3>В Ташкенте планируют ввести новую систему электронных <span className="block">проездных билетов</span>
              </h3>
              <p>Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.
              </p>
              <span>11:31 / 15.05.2020</span>
            </div>
          </div>

          <div className="container__left__card">
            <div className="container__left__card__left">
              <img src={section2Img} alt="" />
            </div>

            <div className="container__left__card__right">
              <h3>По факту прорыва Сардобинского водохранилища
                <span className="block">возбуждено уголовное дело</span></h3>
              <p>После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.
              </p>
              <span>11:31 / 15.05.2020</span>
            </div>
          </div>

          <div className="container__left__card">
            <div className="container__left__card__left">
              <img src={section2Img} alt="" />
            </div>

            <div className="container__left__card__right">
              <h3>Мирзиёев: «Нам следовало бы принять некоторые правила
                <span className="block">карантина как часть повседневной жизни»</span>
              </h3>
              <p>Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.
              </p>
              <span>11:31 / 15.05.2020</span>
            </div>
          </div>


          <div className="container__left__card">
            <div className="container__left__card__left">
              <img src={section2Img} alt="" />
            </div>

            <div className="container__left__card__right">
              <h3>Мирзиёев: «Нам следовало бы принять некоторые правила
                <span className="block">карантина как часть повседневной жизни»</span>
              </h3>
              <p>Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.
              </p>
              <span>11:31 / 15.05.2020</span>
            </div>
          </div>
          <button>Больше новостей</button>
        </div>
        <div className="container__right">
          <h2>Cамые популярные новости</h2>
          <div className="container__right__card">
            <p>По факту прорыва Сардобинского водохранилища
              <span className='block'>возбуждено уголовное дело</span></p>

            <span>11:31 / 15.05.2020</span>
          </div>

          <div className="container__right__card">
            <p>По факту прорыва Сардобинского водохранилища
              <span className='block'>возбуждено уголовное дело</span></p>

            <span>11:31 / 15.05.2020</span>
          </div>

          <div className="container__right__card">
            <p>По факту прорыва Сардобинского водохранилища
              <span className='block'>возбуждено уголовное дело</span></p>

            <span>11:31 / 15.05.2020</span>
          </div>

          <div className="container__right__card">
            <p>По факту прорыва Сардобинского водохранилища
              <span className='block'>возбуждено уголовное дело</span></p>

            <span>11:31 / 15.05.2020</span>
          </div>
          <img width="348px" src={tarif} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Main2
