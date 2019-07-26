import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Farmacia from '../views/Farmacia';
import styles from './Farmacias.module.scss';

// Import datos de /database
import * as data from '../Database/db.json';

const Farmacias = ({ comunaSelected = '' }) => {
  Farmacias.propTypes = {
    comunaSelected: PropTypes.string.isRequired,
  };

  // Todas las farmacias desde db.json.
  const [farmaciasDeTurno, setFarmaciasDeTurno] = useState(data.default);
  const [farmacias, setFarmacias] = useState([]);
  useEffect(() => {
    // Lista de farmacias segun comuna elegida
    const farmaciasList = farmaciasDeTurno.filter(
      farmacia => farmacia.comuna_nombre === comunaSelected,
    );
    let farmaciasArr = [];
    farmaciasArr = farmaciasList.map(farmacia => (
      <Farmacia
        style={styles.farmaciaContainer}
        key={farmacia.local_id}
        localidad_nombre={farmacia.localidad_nombre}
        local_nombre={farmacia.local_nombre}
        local_direccion={farmacia.local_direccion}
        local_lat={farmacia.local_lat}
        local_lng={farmacia.local_lng}
      />
    ));
    setFarmacias(farmaciasArr);
  }, [comunaSelected]);

  return <div className={styles.farmaciaContainer}>{farmacias}</div>;
};

export default Farmacias;
