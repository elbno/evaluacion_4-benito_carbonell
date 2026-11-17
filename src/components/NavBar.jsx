import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="site-header" role="banner">
      <NavLink to="/" className="logo" aria-label="Volver al inicio de Mi Portafolio">
         Mi Portafolio
      </NavLink>
      <nav className="main-nav" role="navigation" aria-label="Menú Principal">
        <NavLink to="/" className={({ isActive }) => isActive ? "main-nav__link main-nav__link--active" : "main-nav__link"}>
          Sobre mí
        </NavLink>
        <NavLink to="/proyectos" className={({ isActive }) => isActive ? "main-nav__link main-nav__link--active" : "main-nav__link"}>
          Proyectos (API)
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? "main-nav__link main-nav__link--active" : "main-nav__link"}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}