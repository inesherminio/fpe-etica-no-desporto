import React from "react";
import "./LowBar.css";
import idpj from "../../images/logo-idpj.jpg";

function LowBar() {
  return (
    <div className="low-bar-container">
      <p className="low-bar-dev-info">Developed by Inês Hermínio</p>
      <img src={idpj} alt="Logo IDPJ" style={{ height: "5vh" }} />
    </div>
  );
}

export default LowBar;
