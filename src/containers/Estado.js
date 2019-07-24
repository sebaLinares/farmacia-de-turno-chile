import React, { Component } from 'react';
import styles from './Estado.module.scss';

class Estado extends Component {
  state = {
    version: 'V.0.2',
    ultimaActualizacion: '26-04-2019',
  };
  render() {
    return (
      <div className={styles.Estado}>
        <div className={styles.box}>
          Version: <span>{this.state.version}</span>
        </div>
        <div className={styles.box}>
          <p>Ultima actualización: </p>
          <span>{this.state.ultimaActualizacion}</span>
        </div>
        <div className={styles.box}>
          <p>Repositorio </p>
          <a href="https://github.com/sebaLinares/farmacia-de-turno-chile-react">Github</a>
        </div>
      </div>
    );
  }
}

export default Estado;
