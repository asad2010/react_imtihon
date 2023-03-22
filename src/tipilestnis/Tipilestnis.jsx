import "./Tpls.css"
import "../Global.css"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import zbj from "./забежная.png"
import zbj2 from "./прямая.png"
import zbj3 from "./винтовая.png"

function Tipilestnis(props) {
    let x = "< | >"
    return (
        <>
            <section className="mt-5 mb-5">
                <div className="container container-fluid">
                    <div className="row justify-content-between mb-5">
                        <div className="col-auto">
                            <h1 className="withbgtext">Типы лестниц</h1>
                        </div>
                        <div className="col-auto">
                            <p className="fs-2">{x}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 text-center">
                            <img src={zbj2} className="img-fluid" alt="1" />
                            <h4>Прямая лестница</h4>
                            <p>от <b> 18000 ₽</b> за м. п.</p>
                            <button className="btn-podrobneee">Подробнее</button>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <img src={zbj} className="img-fluid" alt="2" />
                            <h4>Забежная лестница</h4>
                            <p>от <b>27000 ₽ </b>за м. п.</p>
                            <button className="btn-podrobneee">Подробнее</button>

                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <img src={zbj3} className="img-fluid" alt="3" />
                            <h4>Винтовая лестница</h4>
                            <p>от <b>30000 ₽ </b>за м. п.</p>
                            <button className="btn-podrobneee">Подробнее</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tipilestnis;