import React from 'react'
import tgLogo from "./assets/img/tg2.png";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='footer__left'>
                    <a href="">NAMANGANLIKLAR24</a>
                </div>
                <div className="footer__right">
                    <p>Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</p> <a href=""><img src={tgLogo} alt="" /> Подписаться</a>
                </div>
            </div>
            <div className="container2">
                <div className="container-footer__right">
                    <h4>О сайте</h4>
                    <p>Воспроизводство, копирование, тиражирование, распростране ние и иное использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.</p>
                </div>
                <div className="container-footer__middle">
                    <ul>
                        <li><a href="">Информаяция о сайте</a></li>
                        <li><a href="">Напишите нам</a></li>
                        <li><a href="">Реклама</a></li>
                        <li><a href="">Прислать новость</a></li>
                    </ul>
                </div>

                <div className="container-footer__left  ">
                    <ul>
                        <li><a href="">Использование материалов </a></li>
                        <li><a href="">Темы дня</a></li>
                        <li><a href="">Наша команда</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
