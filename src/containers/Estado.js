import React, { useState } from 'react';
import styles from './Estado.module.scss';

const Estado = () => {
  const [estado, setEstado] = useState({
    version: 'V.0.2',
    ultimaActualizacion: '26-04-2019',
  });

  return (
    <div className={styles.Estado}>
      <div className={styles.box}>
        Version:
        {' '}
        <span>{estado.version}</span>
      </div>
      <div className={styles.box}>
        <p>Ultima actualización: </p>
        <span>{estado.ultimaActualizacion}</span>
      </div>
      <div className={styles.box}>
        <p>Repositorio </p>
        <a href="https://github.com/sebaLinares/farmacia-de-turno-chile-react">Github</a>
      </div>
    </div>
  );
};

export default Estado;
