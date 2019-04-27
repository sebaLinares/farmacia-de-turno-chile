import React from 'react';
import styles from './Farmacia.module.scss';

const farmacia = (props) => {
  return (
    <div className={styles.farmaciaCard}>
      <div className={styles.nombreComuna}><h3>{props.localidad_nombre}</h3></div>
      <div className={styles.cardBody}>
        <h4>{props.local_nombre}</h4>
        <h5>{props.local_direccion}</h5>
      </div>
      <div className={styles.footer}>
        <p>Copia esto: <strong>{props.local_lat}, {props.local_lng}</strong></p>
        <p>Pégalo en la búsqueda de <a href="https://www.google.cl/maps">Google Maps</a> para encontrar esta farmacia</p>
      </div>
    </div>
  )
}

export default farmacia;
