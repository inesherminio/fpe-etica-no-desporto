import React from "react";
import "./LowBar.css";
import idpj from "../../images/logo-idpj.jpg";
import pned from "../../images/logo-pned.png";

function LowBar() {
  return (
    <div className="low-bar-container">
      <p className="low-bar-dev-info">Developed by Inês Hermínio</p>
      <div>
        <img src={pned} alt="Logo IDPJ" style={{ height: "5vh" }} />
        <img src={idpj} alt="Logo IDPJ" style={{ height: "5vh" }} />
      </div>
    </div>
  );
}

export default LowBar;
