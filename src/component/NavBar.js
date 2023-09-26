import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="Navegador-main">
        <div className="contenedor-links">
          <button className="btn btn-primary">
            <a className="links-nav" href="">
              Inicio
            </a>
          </button>
        </div>
        <div className="contenedor-links">
          <button className="btn btn-primary">
            <a className="links-nav" href="">
              Productos
            </a>
          </button>
        </div>
        <div className="contenedor-links">
          <button className="btn btn-primary">
            <a className="links-nav" href="">
              Carrito
            </a>
          </button>
        </div>
        <div className="contenedor-links">
          <button className="btn btn-primary">
            {" "}
            <a className="links-nav" href="">
              Contactanos
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
