import React from "react";
import {useNavigate} from "react-router-dom";

import erro404 from "../../assets/gifs/404.gif";
import Button from "../Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="page">
    <div className={"animate__animated animate__fadeIn animate__delay-1s "}>
      <img src={erro404} alt="404-gif" />
      <h1
        className={` animate__animated animate__fadeInDown animate__delay-2s`}
      >
        Página não encontrada
      </h1>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Voltar
      </Button>
    </div>
    </section>
  );
};

export default NotFound;
