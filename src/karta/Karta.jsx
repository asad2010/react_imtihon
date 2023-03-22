import "./Karta.css"
import {useState, React} from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../Global.css"
import karta from "./karta.png"

function Karta(props) {
    let [infa, setInfa] = useState("");
    return (
        <>  
            <section>
                <div className="container container-fluid">
                    <div className="row justify-content-between ">
                        <div className="col-12 col-md-6 mt-4 mt-md-0">
                            <img src={karta} className="img-fluid" alt="" />
                        </div>
                        <div className="col-12 col-md-6 mt-4 mt-md-0">
                            <h1 className="withbgtext2 ">У вас остались <br /> вопросы?</h1>
                            <p className="mt-4 text-muted mb-5">Не нашли нужной информации? Интересует что-то <br /> конкретное? Напишите нам и наши специалисты <br />ответят вам в течении 30 минут!</p>
                            <div className="d-flex flex-column">

                                <input type="text" className="inp mb-3 " placeholder="Ваше имя..." onChange={e => setInfa(e.target.value)}/>
                                <input type="text" className="inp mb-3 " placeholder="Ваш телефон..." onChange={e => setInfa(e.target.value)} />
                                <input type="text" className="inp mb-5   "  placeholder="Ваш вопрос..."onChange={e => setInfa(e.target.value)} />
                            </div>
                            <button className="karta-btn">Отправить сообщение</button> <br />
                            <span className="text-muted">*Нажимая на кнопку вы соглашаетесь <br />с политикой конфиденциальности</span>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Karta;