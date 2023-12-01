import React from "react";
import "./_ListItem.scss";
import { Link } from "react-router-dom";

export const ListItem=({llave, codigo, descripcion, descripcionComp})=>{

    let imgjpg = 0
    let imgAvif = 0
    try {//intenta buscar la imagen jpg
        imgjpg = require(`../../Assets/png/Productos/${codigo}.png`)
    } catch (error) {
        imgjpg = 0
    }
    try {//intenta buscar la imagen AVIF
        imgAvif = require(`../../Assets/avif/Productos/${codigo}.avif`)
    } catch (error) {
        imgAvif = 0
    }
    const click_caja = () => {
        var el_id = "#lazy_modal" + (llave)
        const elemento = document.querySelector(el_id)
        const elSrcValue = elemento.getAttribute('elsrc') 
        elemento.srcset = elSrcValue
        elemento.removeAttribute("id")
    }

    return(
        //src={require(`../../Assets/jpg/Promociones/${data[0].cod}.jpg`)}
        <>
            <div className="caja" data-bs-toggle="modal" data-bs-target={`#producto${llave}`} onClick={click_caja}>
                
                <div className="row">
                    <div className="col h-100">
                        <div className="row row-cols-1 g-0">

                            <div className="col imgProducto">                               
                                { imgAvif ? 
                                    <picture>
                                        <source                                            
                                            type="image/avif"
                                            srcSet={imgAvif}                                            
                                        />
                                        <img                                            
                                            src={imgjpg}
                                            alt="categoria"
                                            decoding="async"
                                        />
                                    </picture>
                                    :
                                    <img
                                        src={imgjpg}
                                        alt="categoria"
                                        decoding="async"
                                    />
                                }
                            </div>

                            <div className="col">
                                <div className="descFont titleFont">{descripcion}</div>
                                <div className="codFont">{codigo}</div>
                            </div>

                        </div>                        
                    </div>
                </div>
                
            </div>

            <div className="modal fade" id={`producto${llave}`} tabIndex="-1" aria-labelledby="productoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 d-block" id="productolLabel">
                                {descripcion}<br/>
                                <span className="codigo">Cod: {codigo}</span>
                            </h1>                            
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="imgModal">
                                <picture>
                                    <source
                                        id={`lazy_modal${llave}`}
                                        type="image/avif"
                                        elsrc={imgAvif}
                                    />
                                    <img
                                        elsrc={imgjpg}
                                        alt="categoria"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                            <div className="genFont">
                                <strong>Descripcion:</strong><br/>
                                {descripcionComp}.
                                <br/>
                                <div className="modal-footer" data-bs-dismiss="modal">
                                    <Link to={'catalogo'} state={{ bookM: `INICIO`}}>
                                        Mas productos
                                    </Link>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}