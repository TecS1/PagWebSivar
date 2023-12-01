import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Products, About, Privacy, Catalogo, ContactUs} from "../pages";



export function /*LoggedNavigation*/Navigation() {
    return (
      <>
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='products' element={ <Products /> } />
              <Route path='about' element={ <About /> } />
              <Route path='privacy' element={ <Privacy /> } />
              <Route path='contactUs' element={ <ContactUs /> } />
              <Route path='catalogo' element={ <Catalogo /> } />
          </Routes>
      </>
    );
}