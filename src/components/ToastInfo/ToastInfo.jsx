import React from "react";
import "./ToastInfo.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";

function ToastInfo() {
  return (
    <div>
      <div className="contact-container">
        <HomeIcon fontSize="small" className="toast-icon" />
        <p className="toast-text">
          Avenida de Berna, nº31, 1º Drt Lisboa – Portugal
        </p>
      </div>
      <div className="contact-container">
        <LocalPhoneIcon fontSize="small" className="toast-icon" />
        <p className="toast-text">+351 213 978 717</p>
      </div>
      <div className="contact-container">
        <EmailIcon fontSize="small" className="toast-icon" />
        <a
          href="mailto:fpe@fpe.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="toast-text"
        >
          fpe@fpe.pt
        </a>
      </div>
    </div>
  );
}

export default ToastInfo;
