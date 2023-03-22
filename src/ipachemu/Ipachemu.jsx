import "./Ipachemu.css"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../Global.css"
import spes from "./spes.png"
import right from "./right.png"

function Ipachemu(props) {
    return (
        <>
            <section className="mt-5">
                <div className="container container-fluid">
                    <h1 className="withbgtext2">Почему стоит <br />обратиться к нам</h1>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4">
                            <h4 className="mt-5">Мы воплощаем идеи в реальность</h4>
                            <p className="mt-5">
                            Популярность монолитных лестничных систем 
                            из железобетона в современном строительстве очень высока. Когда решите заказать эксклюзивную бетонную лестницу, главное — не ошибиться 
                            с выбором ее изготовителя. Отдав предпочтение компании «Лесенка 52», вы найдете в нашем лице надежного партнера, с отличной репутацией, 
                            предлагающего лучшие в регионе качество 
                            и расценки.
                            </p>
                            <p className="mt-5">Популярность монолитных лестничных систем из железобетона в современном строительстве очень высока. </p>
                        </div>
                        <div className="col-12 col-md-4">
                        <h4 className="mt-5">Наша <br /> специализация:</h4>
                        <img src={spes} className="img-fluid mt-5" alt="" />

                        </div>
                        <div className="col-12 col-md-4">
                            <img src={right} className="img-fluid   " alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Ipachemu;