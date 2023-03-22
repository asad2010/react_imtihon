import "./Premush.css"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../Global.css"
import img from "./img.png"
function Premush(props) {
    return (
        <>
            <section className="mt-5 mb-5">
                <div className="container container-fluid">
                    <div className="row">   
                        <h1 className="withbgtext2">Преимущества <br /> монолитных лестниц</h1>
                        <div className="col-12 col-md-6">
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                        <p className="text-muted mt-3"><span className="text-dark fw-bold">Долговечность и надежность</span> <br /> 
                        Монолитные лестницы из бетона выдерживают большую 
                        нагрузку — 800–1000 кг/см2. Срок службы бетона — 100 и более лет.</p>
                        <p className="text-muted mt-3"><span className="text-dark fw-bold">Разнообразие форм, конфигураций и стилей</span> <br /> 
                        Большой выбор форм лестниц поможет вашему дому 
                        выделиться и приобрести уникальность.</p>
                        <p className="text-muted mt-3"><span className="text-dark fw-bold">Низкий уровень шума и вибраций</span> <br /> 
                        При ходьбе или беге по ним не передаются колебания 
                        на несущие конструкции и глушатся шумы.</p>
                        <p className="text-muted mt-3"><span className="text-dark fw-bold">Отсутствие опор в конструкции</span> <br /> 
                        Существенно сохраняет свободное пространство, сокращает количество материалов для изготовления лестницы.
                        </p>
                        <p className="text-muted mt-3"><span className="text-dark fw-bold">Возможность отделки любыми материалами</span> <br /> 
                        Дерево, керамическая плитка, клинкерная плитка, кованые элементы, ковролин, ламинат, натуральный камень, стекло. </p>
                        <p className="text-muted mt-3"><span className="text-dark fw-bold">Пожаробезопасность, огнестойкость</span> <br /> 
                        Бетон, из которого изготавливаются монолитные бетонные лестницы не горючий, огнеупорный материал.</p>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Premush;