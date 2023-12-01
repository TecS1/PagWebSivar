import React from 'react'
import './_CategMenuMobile.scss';
import categs from "../../Assets/jpg/categorias/categorias.json";
import { Link } from 'react-router-dom';

export function CategMenuMobile() {

    const items = categs;

    //Funcion para mostrar los logos en el menu desplegable
    const Items = () => (        
        <ul className='p-0 m-0'>
          {
            items.map((item, index) => (
                <li key={index} className='lstStylN items-menu-mob'>
                    <Link to={'catalogo'} state={{ bookM: `${item.descripcion.toUpperCase()}` }}>
                        <picture>
                            <source 
                                type="image/avif"
                                srcSet={require(`../../Assets/avif/Logos/${item.descripcion}.avif`)}
                            />
                            <img
                                className="logoMenuCat"
                                src={require(`../../Assets/png/Logos/${item.descripcion}.png`)}
                                alt="imgCategory"
                            />
                        </picture>
                    </Link>
                </li>
            ))
          }
        </ul>
    );

    return (
        <>
            <div className='menu-mob'>
                <input type='checkbox' id='logoCat'/>

                <Items/>
                
                <label htmlFor='logoCat'>
                    <img
                        className='logoCatalogo'
                        src={require('../../Assets/png/Logos/logoCatalogo.png')}
                        alt='LogoCatalogo'
                    />
                </label>
            </div>
        
        </>
    );
}
