import React from "react";
import iconLogoHeader from "../icons/icon-logo.png";

import "../styles/Header/Header.scss";

export const Header = ({streamSelected, setStreamSelected}) => {
  return (
    <header>
      <img src={iconLogoHeader} alt="Logo" onClick={()=>{setStreamSelected(false)}}></img>
      <div className="header-buttons">
        <button  className="login-btn" id="login-btn">Iniciar Sesión</button>
        <button className="register-btn" id="register-btn">Registrarse</button>
      </div>
    </header>
  );
};
