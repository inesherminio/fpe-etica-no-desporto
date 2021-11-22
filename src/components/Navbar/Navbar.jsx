import React, { useState } from "react";
import "./Navbar.css";
import fpeLogo from "../../images/logo-FPE.png";
import { NavLink } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import Toast from "react-bootstrap/Toast";
import ToastInfo from "../ToastInfo/ToastInfo";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-dark">
        <div className="navbar-content">
          <a href={PATHS.HOMEPAGE} className="navbar-content-brand">
            <img
              src={fpeLogo}
              alt="Logo Federação Portuguesa de Esgrima"
              class="d-inline-block align-text-top"
              id="fpe-logo"
            />
            <p className="fpe">
              FEDERAÇÃO
              <br />
              PORTUGUESA
              <br />
              DE ESGRIMA
            </p>
          </a>
          <div className="navbar-content-info">
            <a href="http://www.fpe.pt" target="_blank" className="nav-link">
              FPE
            </a>
            <a href="#" className="nav-link" onClick={() => setShow(true)}>
              Contactos
            </a>
          </div>
        </div>
      </nav>
      <div style={{ textAlign: "right" }}>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          position="top-end"
          className="d-inline-block m-1 toast"
        >
          <Toast.Header>
            <strong className="me-auto">Contactos</strong>
          </Toast.Header>
          <Toast.Body style={{ background: "white" }}>
            <ToastInfo />
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
}

export default Navbar;
