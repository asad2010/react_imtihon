import "./Tride.css"
import {useState, React} from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"

function Tride(props) {
    const [tdm, setTdm] = useState("")

    return (
        <>
            <section className="fsec mt-5 pt-5 pb-5">
                <div className="container container-fluid">
                    <div className="text-center">

                    <h1>Получите 3d-визуализацию вашей будущей лестницы бесплатно!</h1>
                    <p>Оставьте свои контактные данные и наш специалист свяжется свами в течении 15 минут!</p> 
                    <div className="row mb-4 mt-5 pt-5 pb-3">
                        <div className="col-12 col-md 4">
                            <input type="text" className="inpf" placeholder="Ваше имя" onChange={event => setTdm(event.target.value)}/>
                        </div>
                        <div className="col-12 col-md 4">
                            <input type="number" className="inpf" min="300000000" placeholder="Ваш телефон" onChange={event => setTdm(event.target.value)}/>
                            
                        </div>
                        <div className="col-12 col-md 4">
                            <input type="email" className="inpf" placeholder="Ваш e-mail" onChange={event => setTdm(event.target.value)}/>

                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-auto">
                            <button className="btnf">
                                Отправить заявку
                            </button>
                        </div>
                        <div className="col-12 col-md-auto">
                            <p className="text-muted text-start">
                            Нажимая на кнопку <br />
                            вы соглашаетесь  с политикой<br />
                            конфиденциальности 
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tride;