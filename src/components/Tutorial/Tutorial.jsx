import React from "react";
import {useNavigate} from "react-router-dom";
import tutorialGif from "../../assets/gifs/tutorial.gif";
import Button from "../Button/Button";
import styles from './tutorial.module.css'

const Tutorial = () => {
  const navigate = useNavigate();

  return (
    <section className="page">
      <div className={"imageContent"}>
        <img src={tutorialGif} alt="tutorial-gif" />
      </div>
      <div className={"content"}>
      <h1 className={`${styles.h1Tutorial} animate__animated animate__bounce animate__delay-1s`} > Tutorial </h1>
        <div className="centralize animate__animated animate__zoomIn animate__delay-1s">

          <div className="card">
            <li>
              <ul>1. Essa ferramenta utiliza notas de piano para simular e criar melodias</ul> 
              <ul>2. Voce poderá utilizar as teclas do seu teclado ou o seu mouse para clicar em cada tecla apresentada na tela</ul> 
              <ul>3. O botão <strong>Tocar</strong> ▶️ irá reproduzir as teclas clicadas em formato de melodia</ul> 
              <ul>4. O botão <strong>Parar</strong> ⏸️ irá parar de reproduzir a melodia</ul>
              <ul>5. O botão <strong>Recomeçar</strong> 🔁 irá apagar a melodia criada, assim permitindo a criação de uma nova</ul>
              <ul>7. Ao lado será possivel ver um exemplo de melodia para te auxiliar no uso da ferramenta</ul>
              <ul>8. Por se tratar de um piano virtual, cada tecla do teclado representa uma nota real do piano (A tabela estará disponível na próxima página)</ul>
              <ul>9. O design do piano da aplicação é diferente do tradicional, pois foi utilizado a criatividade e o poder das ferramentas de software para criar algo diferente, mas que mantém a funcionalidade tradicional</ul>
              <ul>10. Aproveite a experiência! 🤩</ul>
            </li>
            <Button
              onClick={() => {
                navigate("/home");
              }}
            >
              Começar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
