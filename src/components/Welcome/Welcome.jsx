import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./welcome.module.css";
import welcomeGif from "../../assets/gifs/welcome.gif";
import Button from "../Button/Button";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section className="page">
      <div className={"animate__animated animate__fadeIn animate__delay-1s imageContent"}>
        <img src={welcomeGif} alt="welcome-gif" />
      </div>
      <div className={"content"}>
        <div className={`centralize animate__animated animate__fadeIn animate__delay-1s`}>
        <h1 className={`${styles.h1Welcome} animate__animated animate__fadeInDown animate__delay-1s`}>
          Seja Bem vindo a Minha Máquina <br /> de Fazer Música 🎵
        </h1>{" "}
        <div className={'card'}>
          {" "}
          <p className="animate__animated animate__fadeIn animate__delay-2s">
            Esse projeto faz parte da disciplina Computação e Música do curso de
            Ciencia da Computação da UFCG
          </p>{" "}
          <p className="animate__animated animate__fadeIn animate__delay-2s">
            O principal objetivo dessa ferramenta é através da tecnologia e do
            uso de ferramentas de software impactar o maior número de pessoas
            com a música, ajudando-as a alcançar sua expressão artistica musical.
            A partir dessa obra um mundo de possibilidades se abre para aqueles
            que sempre quiseram experimentar um piano diferente e virtual
          </p>{" "}
          <p className="animate__animated animate__fadeIn animate__delay-3s">Eai, curioso? Vamos para próximo passo! 😉 </p>{" "}
          <Button className="animate__animated animate__fadeIn animate__delay-3s"
            onClick={() => {
              navigate("tutorial");
            }}
          >
            Vamos lá
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Welcome;
