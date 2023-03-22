import "./Primeri.css"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../Global.css"
import image from "./right.png"
import image2 from "./img2.png"
import image3 from "./img3.png"


function Primeri(props) {
    return (
        <>  
            <section className="primer mb-5 mt-5 ">
                <div className="container container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1 className="withbgtext2">Примеры наших <br /> работ  </h1>
                            <h4 className="mt-5">Прямая лестница в новом <br /> доме, г. Нижний Новгород</h4>
                            <p className="text-muted mt-4">Тип посещения: <span className="text-dark">частный дом</span></p>
                            <p className="text-muted">Высота от пола до потолка:<span className="text-dark"> 3,1 м</span></p>
                            <p className="text-muted">Количество ступеней:.<span className="text-dark">18 шт.</span></p>
                            <p className="text-muted">Количество подъемов:<span className="text-dark"> 20 шт.</span></p>
                            <p className="text-muted">Срок изготовления:<span className="text-dark"> 17 дней</span></p>
                            <p className="mt-4 text-muted">Стоимость: <span className="text-dark"><b>75000</b> </span>Р</p>
                            <button className="primeri-btn">Хочу такую лестницу</button>

                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column  ">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={image} class="img-fluid d-block " alt="..." />
                                </div>
                                <div class="carousel-item">
                                <img src={image2} class="img-fluid d-block" alt="...1" />
                                </div>
                                <div class="carousel-item">
                                <img src={image3} class="img-fluid d-block " alt="...2" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Primeri;