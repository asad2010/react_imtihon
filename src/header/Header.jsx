import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import logo from "./LOGO.png"
import "./Header.css"
import heroimg from "./heroimg.png"

function Header(props) {
    return (
        <>
        <div className="header-and-main">
            <header className="pt-4">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container container-fluid">
                        <div className="nav-logo d-flex ">
                            <a class="navbar-brand" href="#">
                                <img src={logo} className="img-fluid" alt="" />
                            </a>
                            <div>
                                <a href="#" className="nav-link">Проектирование</a>
                                <a href="#" className="nav-link">Изготовление </a>
                                <a href="#" className="nav-link">Монтаж</a>

                            </div>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto ">
                            <li class="nav-item">
                                <a class="nav-link" href="#">О компании</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Каталог</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Примеры работ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Блог</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Контакты</a>
                            </li>      
                        </ul>
                        <div class="d-flex flex-column">
                            <p> +7 (930) 283-50-65</p>             
                            <button class="nav-btn">Перезвоните мне!</button>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="hero mt-5">
                <div className="container container-fluid">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={heroimg} className="img-fluid" alt="" />
                            <div className="hero-black">
                                <p>Расчитайте стоимость вашей лестницы <b>в 3 шага</b></p>
                                <button className="hero-black-btn">Подробнее</button>
                            </div>
                        </div>
                        <div className="hero-right col-12 col-md-6 mt-5 mt-md-0 ms-md-0">
                            <p className="hero-suptext">Всего за <b>10 дней</b> с гарантией <b>30 лет</b></p>
                            <h1>Монолитные <br /> лестницы <br />«под ключ»</h1>
                            <p className="mt-5">Исполним все ваши мечты о современной <br /> и красивой лестнице по минимальной <br /> цене, но с максимальным качеством!</p>
                            <button className="consultation mt-4">
                                Консультация
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;