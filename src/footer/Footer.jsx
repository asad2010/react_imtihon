import "./Footer.css"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../Global.css"
import logo from "../header/LOGO.png"
function Footer(props) {

    return (
        <>
            <footer className="mt-5">
                <div className="container container-fluid">
                    <div className="row pt-5 pb-5">
                        <div className="col-12 col-md-3 d-flex">
                            <img src={logo} className="img-fluid" alt="" />
                            <div>
                                <a href="#" className="nav-link">Проектирование</a>
                                <a href="#" className="nav-link">Изготовление </a>
                                <a href="#" className="nav-link">Монтаж</a>
                            </div>

                        </div>
                        <div className="col-12 col-md-3">
                            <a href="#" className="nav-link">О компании</a>
                            <a href="#" className="nav-link text-warning">Каталог </a>
                            <a href="#" className="nav-link">Блог</a> 
                        </div>
                        <div className="col-12 col-md-3">
                            <a href="#" className="nav-link">Примеры работ</a>
                            <a href="#" className="nav-link text-warning">Контакты </a>
                            </div>
                        <div className="col-12 col-md-3">
                            <a href="#" className="nav-link">+7 (930) 283-50-65</a>
                            <button className="fott-btn">Перезвоните мне!</button>
                        </div>
                    </div>
                </div>  
            </footer>
        </>
    )
 }

 export default Footer;