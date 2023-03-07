import React from "react";
import Logo from "../../assets/logotipo.png";

const Header = () => {
  return (
    <header>
      <figure>
        <img src={Logo} alt="Logo RentaTennis" />
      </figure>

      <div className="button__header">
        <button>Entrar</button>
        <button>Cadastrar</button>
      </div>
    </header>
  );
};

export default Header;
