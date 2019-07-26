import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AWS from 'aws-sdk';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { regiones } from '../Database/regiones.js';
// import * as regiones from '../Database/regiones.json';
import farmacias from '../Database/db.json';

const Header = ({ comunaHandler = '' }) => {
  Header.propTypes = {
    comunaHandler: PropTypes.func.isRequired,
  };

  const [farmaciasArr, setFarmaciasArr] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [localidadesArr, setLocalidadesArr] = useState([]);
  const [regionesArr, setRegionesArr] = useState([]);
  const [regionSelected, setRegionSelected] = useState('');
  const [farmaciasSegunComuna, setFarmaciasSegunComuna] = useState([]);
  const [showFarmacias, setShowFarmacias] = useState(false);
  // const [options, setOptions] = useState('')
  // Query a DynamoDB
  // const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

  useEffect(() => {
    // const scanningParameters = {
    //   TableName: 'farmacias',
    //   Limit: 310,
    // };
    const getFarmacias = async () => {
      try {
        // const farmacias = await axios.get(
        //   'https://jsonplaceholder.typicode.com/todos/1',
        // );
        // const farmacias = await docClient.scan(scanningParameters).promise();
        // Set farmaciasArr
        setFarmaciasArr(farmacias);

        // // Get comunas, sort them & set state
        // const comunas = farmacias.map(farmacia => farmacia.comuna_nombre);
        // comunas.sort();
        // setComunasArr(comunas);

        // Get localidades, sort them & set state
        const localidades = farmacias.map(farmacia => farmacia.localidad_nombre);
        localidades.sort();
        setLocalidadesArr(localidades);
      } catch (err) {
        console.error(err);
      }
    };
    getFarmacias();
  }, []);
  useEffect(() => {
    if (regionSelected) {
      // Obtener numero de region
      const regionObj = regiones.filter(region => region.nombre === regionSelected);
      const numeroRegion = regionObj[0].fk_region;

      // Filtrar comunas por numero de region en farmaciasDeTurno
      if (farmaciasArr) {
        console.log(farmaciasArr);
        const farmaciasComunas = farmaciasArr.filter(
          farmacia => farmacia.fk_region === numeroRegion.toString(),
        );
        // Ordenar por nombre: Algoritmo de
        // https://stackoverflow.com/questions/8900732/javascript-sort-objects-in-an-array-alphabetically-on-one-property-of-the-arra
        farmaciasComunas.sort((a, b) => (a.comuna_nombre > b.comuna_nombre ? 1 : -1));

        // Empezar un empty list para crear <option>
        const comunasArr = farmaciasComunas.reduce((p, c) => {
          if (!p.some(el => el.comuna_nombre === c.comuna_nombre)) p.push(c);
          return p;
        }, []);
        const comunasList = comunasArr.map(farmacia => (
          <option key={farmacia.comuna_nombre} value={farmacia.comuna_nombre}>
            {farmacia.comuna_nombre}
          </option>
        ));

        // const comunasList = [];
        // const newList = farmaciasComunas.map((farmacia) => {
        //   // crear list de comunas para evitar duplicados
        //   if (comunasList.includes(farmacia.comuna_nombre)) {
        //   } else {
        //     comunasList.push(farmacia.comuna_nombre);
        //     return (
        //       <option key={farmacia.local_nombre} value={farmacia.comuna_nombre}>
        //         {farmacia.comuna_nombre}
        //       </option>
        //     );
        //   }
        // });
        setComunas(comunasList);
      }
    }
  }, [regionSelected]);
  useEffect(() => {});

  const selectRegionHandler = (event) => {
    // Agregar la region elegida al state y permitir que se muestren comunas con showComunas
    setRegionSelected(event.target.value);
  };

  const selectComunaHandler = (event) => {
    // Permitir que se muestren farmacias & trigger parent event
    setShowFarmacias(true);
    comunaHandler(event.target.value);
  };

  const getStates = () => {
    // console.log(farmaciasArr);
    // console.log(comunasArr);
    // console.log(localidadesArr);
    // console.log(options);
    // console.log(regionSelected);
  };

  // Listado de regiones de chile
  const regionesNombres = regiones.map(region => region.nombre);
  // Mappear listado de regiones y crear un <option> por c/ region
  const options = regionesNombres.map(region => (
    <option key={region} value={region}>
      {region}
    </option>
  ));

  return (
    <div className={styles.Header}>
      <div className={styles.titleContainer}>
        <h1>Descubre la farmacia de turno en tu comuna</h1>
      </div>
      <form className={styles.formContainer}>
        <div className={styles.selectContainer}>
          <span className={styles.selectTitle}>Elige tu región</span>
          <select className={styles.selectTag} onChange={selectRegionHandler}>
            <option value="">¿Qué región quieres ver?</option>
            {options}
          </select>
        </div>
        <div className={styles.selectContainer}>
          <span className={styles.selectTitle}>Elige tu comuna</span>
          <select className={styles.selectTag} onChange={selectComunaHandler}>
            <option value="">¿Qué comuna?</option>
            {comunas}
          </select>
        </div>
      </form>
      <button type="button" onClick={getStates}>
        States
      </button>
    </div>
  );
};

export default Header;
