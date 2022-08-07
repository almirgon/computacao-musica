import React from "react";
import _ from "lodash";
import {KeyboardShortcuts, MidiNumbers} from "react-piano";
import "react-piano/dist/styles.css";

import SoundfontProvider from "../Soundfont/SoundfontProvider";
import PianoWithRecording from "../Piano/PianoWithRecording";
import Button from "../Button/Button";
import {Navigate} from "react-router-dom";
import {ReactComponent as Play} from "../../assets/icons/play.svg";
import {ReactComponent as Pause} from "../../assets/icons/pause.svg";
import {ReactComponent as Back} from "../../assets/icons/back.svg";
import {Tooltip} from "react-tippy";
import "react-tippy/dist/tippy.css";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("e4"),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

class Principal extends React.Component {
  state = {
    recording: {
      mode: "RECORDING",
      events: [],
      currentTime: 0,
      currentEvents: [],
    },
    redirect: false,
  };

  constructor(props) {
    super(props);

    this.scheduledEvents = [];
  }

  getRecordingEndTime = () => {
    if (this.state.recording.events.length === 0) {
      return 0;
    }
    return Math.max(
      ...this.state.recording.events.map(event => event.time + event.duration),
    );
  };

  setRecording = value => {
    this.setState({
      recording: Object.assign({}, this.state.recording, value),
    });
  };

  onClickPlay = () => {
    this.setRecording({
      mode: "PLAYING",
    });
    const startAndEndTimes = _.uniq(
      _.flatMap(this.state.recording.events, event => [
        event.time,
        event.time + event.duration,
      ]),
    );
    startAndEndTimes.forEach(time => {
      this.scheduledEvents.push(
        setTimeout(() => {
          const currentEvents = this.state.recording.events.filter(event => {
            return event.time <= time && event.time + event.duration > time;
          });
          this.setRecording({
            currentEvents,
          });
        }, time * 1000),
      );
    });
    // Stop at the end
    setTimeout(() => {
      this.onClickStop();
    }, this.getRecordingEndTime() * 1000);
  };

  onClickStop = () => {
    this.scheduledEvents.forEach(scheduledEvent => {
      clearTimeout(scheduledEvent);
    });
    this.setRecording({
      mode: "RECORDING",
      currentEvents: [],
    });
  };

  onClickClear = () => {
    this.onClickStop();
    this.setRecording({
      events: [],
      mode: "RECORDING",
      currentEvents: [],
      currentTime: 0,
    });
  };

  render() {
    return (
      <section className="page">
        <div className={"imageContent"}>
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({isLoading, playNote, stopNote}) => (
              <PianoWithRecording
                recording={this.state.recording}
                setRecording={this.setRecording}
                noteRange={noteRange}
                width={300}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
              />
            )}
          />
          <div className="dockbar">
            <Tooltip title="Parar" position="bottom">
              <Pause
                className="pause"
                tooltip="oi"
                style={{cursor: "pointer", fill: "white", transition: '0.2s'}}
                onClick={this.onClickStop}
              >
                Parar
              </Pause>
            </Tooltip>
            <Tooltip title="Tocar" position="bottom">
              {" "}
              <Play
                className="play"
                style={{cursor: "pointer", fill: "white", transition: '0.2s'}}
                onClick={this.onClickPlay}
              >
                Tocar
              </Play>
            </Tooltip>
            <Tooltip title="Recomeçar" position="bottom">
              {" "}
              <Back
                className="back"
                style={{cursor: "pointer", fill: "white", transition: '0.2s'}}
                onClick={this.onClickClear}
              >
                Recomeçar
              </Back>
            </Tooltip>
          </div>
        </div>{" "}
        <div style={{marginBottom: '2rem', marginTop: '2rem'}} className={"content"}>
          <h1
            style={{marginBottom: "0.5rem"}}
            className={` animate__animated animate__bounce animate__delay-1s`}
          >
            {" "}
            Vamos lá{" "}
          </h1>
          <div className="centralize animate__animated animate__zoomIn animate__delay-1s">
            <div className="card">
              <h3>Tabela de notas: Tecla do Computador {">"} Piano(Nº.Midi)</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "left",
                }}
              >
                <li>
                  <ul>Tecla A = C3 (48) </ul>
                  <ul>Tecla W = C3# (49) </ul>
                  <ul>Tecla S = D3 (50) </ul>
                  <ul>Tecla E = D3# (51) </ul>
                  <ul>Tecla D = E3 (52) </ul>
                  <ul>Tecla F = F3 (53) </ul>
                  <ul>Tecla T = F3# (54) </ul>
                  <ul>Tecla G = G3 (55) </ul>
                  <ul>Tecla Y = G3# (56) </ul>
                </li>
                <li>
                  <ul>Tecla H = A3 (57) </ul>
                  <ul>Tecla U = A3# (58) </ul>
                  <ul>Tecla J = B3 (59) </ul>
                  <ul>Tecla K = C4 (60) </ul>
                  <ul>Tecla O = C4# (61) </ul>
                  <ul>Tecla L = D4 (62) </ul>
                  <ul>Tecla P = D4# (63) </ul>
                  <ul>Tecla ; = E4 (64)</ul>
                </li>
              </div>
            </div>

            <div className="card">
              <h3>Melodia Exemplo</h3>
              <li>
                <ul>
                  Siga as letras em sequência apertando nas teclas
                  correspondentes do seu teclado ou utilizando o mouse, para
                  criar uma melodia
                </ul>
                <ul>
                  A -{">"} S -{">"} Y -{">"} H -{">"} U -{">"} E -{">"} W -{">"}{" "}
                  K -{">"} D -{">"} S -{">"} O -{">"} A
                </ul>
                <ul>
                  Aperte o botão <strong>Tocar</strong> ▶️ e escute a melodia
                </ul>
                <ul>
                  Agora aperte o botão <strong>Recomeçar</strong> 🔁 e use a sua
                  criatividade para criar a sua propria melodia ou modificar
                  essa! 😀🎹
                </ul>
              </li>
            </div>

            <div className="card">
              <h3>Créditos</h3>
              <p>
                A máquina de criar música (Pianotopia) foi construída pelo aluno Almir
                Crispiniano na disciplina Computação e Música do curso de
                Ciencia da Computação - UFCG
              </p>
              <p>
                Toda a disciplina foi ministrada pelo Professor Marcelo Barros
                que também auxiliou na construção do processo criativo com aulas
                e atividades remotas{" "}
              </p>
              <Button onClick={() => this.setState({redirect: true})}>
                Voltar para Tela Principal
              </Button>
              {this.state.redirect && <Navigate to="/" replace={true} />}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Principal;
