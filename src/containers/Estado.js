import React, { Component } from 'react';
import './Estado.scss';

class Estado extends Component {
  state = {
    version: 'V.0.2',
    ultimaActualizacion: '26 de abril 2019',
  }
  render() {
    return (
      <div className="Estado">
        <div className="box">
          Version: <span>{this.state.version}</span>
        </div>
        <div className="box">
          <p>Ultima actualización: </p><span>{this.state.ultimaActualizacion}</span>
        </div>
        <div className="box">
          <p>Repositorio </p><a href="https://github.com/sebaLinares/farmacia-de-turno-chile-react">Github</a>
        </div>
        <div className="box">
          <p>Algo más: </p><span>Algo</span>
        </div>
      </div>
    )
  }
}

export default Estado;
