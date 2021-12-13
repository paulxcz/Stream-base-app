import React from "react";

import '../styles/RegisterAdvice/RegisterAdvice.scss'

export const RegisterAdvice = () => {
  return (
    <div className="register-advice">
      <div className="advice-text">
        <i className="far fa-bell"></i>
        <p>
            Regístrate para disfrutar de lo mejor de elXokas. <strong>Chatea, sigue o suscríbete.</strong>
        </p>
      </div>
      <button>Registrarse</button>
    </div>
  );
};
