import React from "react";
import "./_header.scss";
import { Link } from "react-router-dom";


export function Header() {

    /*Funciones para mostrar o esconder caja de texto
      cuando se hace click o se pierde el focus de la caja
    */
    function showGhost() {        
        const item = document.querySelector(".ghost-buscador");
        const item2 = document.querySelector(".caja-buscar");
        item.style.display = "flex";
        item2.focus();
    }
    function hideGhost() {
        const item = document.querySelector(".ghost-buscador");
        item.style.display = "none";
    }
    
    return(
        <header>
            <div className="container-fluid px-4 g-0 cabecera">
                <div className="row position-relative">

                    <button className="btn-buscar p-1" onClick={() => showGhost()}>
                        <i className="bi bi-search"></i>
                    </button>

                    <div className="ghost-buscador">

                        <input type="text" className="caja-buscar" placeholder="Buscar Producto" 
                        aria-label="campo de texto para busqueda"  onBlur={() => hideGhost()}                        
                        />

                    </div>


                    <div className="g2">
                        <button className="menuNav" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-list"></i>
                        </button>

                        <ul className="dropdown-menu">
                            <li><Link to="/" type="button" className="dropdown-item">Inicio</Link></li>
                            <li><Link to={'catalogo'} type="button" className="dropdown-item" state={{ bookM: `INICIO`}}>
                                    Productos
                                </Link>
                            </li>
                            <li><Link to="/about" type="button" className="dropdown-item">Quienes somos</Link></li>
                            <li><Link to="/contactUs" type="button" className="dropdown-item">Contactanos</Link></li>
                        </ul>
                    </div>

                    <div className="col logo">
                        <a href="/" style={{textDecoration: "none" }}>
                            <picture>
                                <source
                                    type="image/avif"
                                    srcSet={require("../../Assets/avif/LogoSierra.avif")}
                                />
                                <img
                                    src={require("../../Assets/png/LogoSierra.png")}
                                    width="2207px"
                                    height="839px"
                                    alt="LogoSierra"
                                    decoding="async"
                                />
                            </picture>
                        </a>                      
                    </div>

                    <div className="col buscar">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Buscar Producto" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="col user">
                        <a href="index.html" style={{textDecoration: "none" }}>
                            <picture>
                                <source 
                                    type="image/avif"
                                    //srcSet={require("../../Assets/avif/LogoSierra.avif")}despues
                                />
                                <img
                                    src={require("../../Assets/png/tuercaUsuario.png")}
                                    width="2965px"
                                    height="2965px"
                                    alt="User"
                                />
                            </picture>
                        </a>                        
                    </div>

                </div>

                <div className="row">
                    <div className="col">
                        <div className="grupoBotones">
                            <div className="btn-group g1 flex-wrap">
                                <Link to="/" type="button" className="btn btn-navBar btn-lg">Inicio</Link>
                                <Link to="catalogo" type="button" className="btn btn-navBar btn-lg" state={{ bookM: `INICIO`}}>
                                    Productos
                                </Link>
                                <Link to="/about" type="button" className="btn btn-navBar btn-lg">Quienes somos</Link>
                                <Link to="/contactUs" type="button" className="btn btn-navBar btn-lg">Contactanos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>       
    );
}
