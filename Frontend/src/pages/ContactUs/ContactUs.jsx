import React from "react";
import "./_ContactUs.scss";

let source = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1406.0504614273996!2d-74.14007727913986!3d4.609903384101687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ff5a9978939%3A0x9b8ad5e6002dd166!2sFerredistribuciones%20Sierra!5e0!3m2!1sen!2sco!4v1684385776029!5m2!1sen!2sco";

export function ContactUs() {

    /*Maneja el envio del formulario, manda los valores del mismo
      a un excel de drive*/
    const handleSubmit = (e) =>{
        const form = document.getElementById('form');
        const btn = document.getElementById('btn-submit')
        e.preventDefault();

        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbwC-m3n98LLIDyba4pV4wRqUGZY2XE5baLf-G9aaQqwQJhesy-fXC5sXQMr0ybOamCrFg/exec'
            ,{
                method: "POST",
                body: data
            })
            .then(res => res.text())
            .then(data => alert(data));
        btn.disabled = true;
        btn.classList.add('botonDis');

    }
    
    return (
        <>
            <div className="ctnUs">
                <div className="titulo">
                    <h1>Contactanos</h1>
                </div>
                <div className="row row-cols-2 gy-2">
                    <div className="genFont w-100">
                        <p className="font-19 p-3" id="mediaQ">"!Contactanos para cualquier consulta! Si buscas oportunidades de colaboración,
                            trabajar con nosotros o ser cliente, envianos un mensaje. ¡Esperamos construir juntos
                            una alianza estrategica!"</p>
                    </div>

                    <div className="col genFont">
                        <p className="font-19 p-3">"!Contactanos para cualquier consulta! Si buscas oportunidades de colaboración,
                        trabajar con nosotros o ser cliente, envianos un mensaje. ¡Esperamos construir juntos
                        una alianza estrategica!"</p>

                        <div className="iframeContainer">
                            <iframe src={source}
                                id="mapaSierra"
                                title="mapa"
                                width="600"
                                height="600"
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                    
                    <div className="col f100">
                        <form className="row g-3 my-3" id='form' onSubmit={handleSubmit}>
                            <div className="col-mb-12">
                                <label className="form-label">Nombre completo:</label>
                                <input type="text" className="form-control" name="name" placeholder="Nombre" required/>
                            </div>
                            <div className="col-mb-12">
                                <label className="form-label">Correo Electrónico:</label>
                                <input type="email" className="form-control" name="email" placeholder="Correo"/>
                            </div>
                            <div className="col-mb-12">
                                <label className="form-label">Celular:</label>
                                <input type="number" className="form-control" name="celNum" placeholder="Celular" required/>
                            </div>
                            <div className="col-6">
                                <label className="form-label">Tipo de solicitud:</label>
                                <select className="form-select" name="soli" required>
                                    <option value=''>...</option>
                                    <option value='cliente'>Quiero ser cliente</option>
                                    <option value='proveedor'>Quiero ser proveedor</option>
                                    <option value='trabajo'>Trabaja con nosotros</option>
                                </select>
                            </div>
                            <div className="col-mb-12">
                                <label className="form-label">Comentarios</label>
                                <textarea className="form-control" name="coms" rows="3"/>
                            </div>

                            <div>
                                <button type="submit" className="boton" id="btn-submit">
                                    <span className="font-19">Enviar</span>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        
        </>
    )
}
