import React, { Component } from 'react';
import Farmacia from '../views/Farmacia';
import styles from './Farmacias.scss';

// Import datos de /database
import * as data from './../Database/db.json';

class Farmacias extends Component {

  // Todas las farmacias desde db.json.
  farmaciasDeTurno = data.default;

  render() {
    let farmacias = [];

    // Lista de farmacias segun comuna elegida
    let farmaciasList = this.farmaciasDeTurno.filter((farmacia)=> farmacia.comuna_nombre === this.props.comunaSelected)
    farmacias = farmaciasList.map((farmacia, index) => {
      return (
        <Farmacia
          key={index}
          localidad_nombre={farmacia.localidad_nombre}
          local_nombre={farmacia.local_nombre}
          local_direccion={farmacia.local_direccion}
          local_lat={farmacia.local_lat}
          local_lng={farmacia.local_lng}/>
      )
    })

    return (
        <div className={styles.Farmacia}>
          {farmacias}
        </div>
    )
  }
}

export default Farmacias;
