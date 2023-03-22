import "./Section-2.css"
import React from "react"
import bezposred from "./bezposred.png"
import fikssenu from "./fikssenu.png"
import lubievarianti from "./lubievarianti.png"
import element from "./element.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
function Section2(props) {
    return (
        <>
            <section className="mt-5 pt-5 pb-5 mb-5">
                <div className="container container-fluid">
                    <div className="d-flex align-items-end justify-content-between">

                        <div className="row">
                            <div className=" col-12 col-md-auto mt-auto">
                                <img src={element} className="img-fluid" alt="" />

                            </div>
                            <div className="brd col-12 col-md-3 d-flex align-items-center">
                                <img src={bezposred} className="img-fluid" alt="1" />
                                <div className="ms-3">

                                <p className="sc2p1">Работаем <br /> без посредников</p>
                                <p className="text-muted">Изготовление и монтаж осуществляют только наши мастера с опытом работы более Х-ти лет.</p>
                                </div>
                            </div>
                            <div className="brd col-12 col-md-3 d-flex align-items-center">
                                <img src={fikssenu} className="img-fluid" alt="1" />
                                <div className="ms-3">

                                <p className="sc2p1">Фиксированные <br />  цены </p>
                                <p className="text-muted">После согласования сметы все цены фиксируются в договоре и не изменяются в процессе.</p>
                                </div>
                            </div>
                            <div className="brd col-12 col-md-3 d-flex align-items-center">
                                <img src={lubievarianti} className="img-fluid" alt="1" />
                                <div className="ms-3">

                                <p className="sc2p1">Любые варианты <br /> отделки</p>
                                <p className="text-muted">Любые материалы отделки готовых лестниц — от дерева и камня до кованых элементов и стекла.</p>
                                </div>
                            </div>
                            <div className=" col-12 col-md-auto mb-auto ">
                                <img src={element} className="img-fluid" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    )
}

export default Section2;