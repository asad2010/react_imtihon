import "./Kak.css"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../Global.css"
import len from "./лень.png"


function Kak(props) {
    return (
        <>
            <section className="kak pb-5 mb-5">
                <div className="container container-fluid">
                    <h1 className="withbgtext2">
                        Как мы <br /> работаем ?
                    </h1>
                    <img src={len} className="img-fluid mt-5" alt="" />
                </div>
            </section>
        </>
    )
}

export default Kak;