import React, { Component } from 'react';
import styles from './Header.module.scss';
import * as data from './../Database/db.json';
import * as regiones from './../Database/regiones.json'


class Header extends Component {
  state = {
    farmacias: {
      nombres: [],
      comunas: [],
      localidades: [],
    },
    showComunas: false,
    regionSelected: '',
    comunaSelected: '',
    showFarmacias: false,
    farmaciasSegunComuna: [],
  }

  // Todas las farmacias desde db.json.
  farmaciasDeTurno = data.default;

  // Listado de regiones de chile
  regiones = regiones.default;

  componentDidMount () {
    // Desde db.json para no hacer tantas api calls.
    // La idea despues es hacer este request una vez al dia, no es necesario hacerlo mas.
    setTimeout(()=> {

      // ===========================
      let comunas = this.farmaciasDeTurno.map(farmacia => farmacia.comuna_nombre)
      comunas.sort();

      let localidades = this.farmaciasDeTurno.map(farmacia => farmacia.localidad_nombre)
      localidades.sort();

      // Manipular una copia del state, no el state mismo.
      let stateCopy = {...this.state.farmacias}

      // Todas las comunas en una list
      stateCopy.comunas = comunas

      // Todas las localidades (mas chicas que las comunas) en una list
      stateCopy.localidades = localidades
      this.setState({
        farmacias: stateCopy
      })
    }, 500)
  }

  selectRegionHandler = (event) => {
    // Agregar la region elegida al state y permitir que se muestren comunas con showComunas
    let regionSelected = this.state.regionSelected;
    regionSelected = event.target.value;

    let showComunas = this.state.showComunas;
    showComunas = true;

    this.setState({
      regionSelected: regionSelected,
      showComunas: showComunas
    })
  }

  selectComunaHandler = (event) => {
    // Agregar comuna selected al state y permitir que se muestren la farmacias por comuna con showFarmacias
    let comunaSelected = this.state.comunaSelected;
    comunaSelected = event.target.value;

    let showFarmacias = this.state.showFarmacias;
    showFarmacias = true;

    this.setState({
      comunaSelected,
      showFarmacias
    })

    this.props.comunaHandler(comunaSelected);
  }

  render() {
    // Crear listde regiones
    let regiones = [];
    let comunas = [];
    for(let region in this.regiones) {
      regiones.push(this.regiones[region].nombre)
    }

    // Mappear listado de regiones y crear un <option> por c/ region
    let options = regiones.map((region, index) => {
      return <option key={index} value={region}>{region}</option>
    })

    if(this.state.showComunas) {
      // Obtener numero de region
      let numeroRegion = '';
      for(let region in this.regiones) {
        if(this.regiones[region].nombre === this.state.regionSelected) {
          numeroRegion = this.regiones[region].fk_region;
        }
      }

      // Filtrar comunas por numero de region en farmaciasDeTurno
      let farmaciasComunas = this.farmaciasDeTurno.filter(farmacia => farmacia.fk_region == numeroRegion);

      // Ordenar por nombre: Algoritmo de
      // https://stackoverflow.com/questions/8900732/javascript-sort-objects-in-an-array-alphabetically-on-one-property-of-the-arra
      farmaciasComunas.sort((a,b) => (a.comuna_nombre < b.comuna_nombre) ? -1 : (a.comuna_nombre > b.comuna_nombre) ? 1 : 0);

      // Empezar un empty list para crear <option>
      let comunasList = [];
      comunas = farmaciasComunas.map((farmacia, index) => {
        // crear list de comunas para evitar duplicados
        if(comunasList.includes(farmacia.comuna_nombre)) {
        } else {
          comunasList.push(farmacia.comuna_nombre);
          return <option key={index} value={farmacia.comuna_nombre}>{farmacia.comuna_nombre}</option>
        }
      })
    }

    return (
      <div className={styles.Header}>
        <div className={styles.titleContainer}>
          <h1>Descubre la farmacia de turno en tu comuna</h1>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.selectContainer}>
            <span className={styles.selectTitle}>Elige tu región</span>
            <select className={styles.selectTag} onChange={this.selectRegionHandler}>
              <option value="">¿Qué región quieres ver?</option>
              {options}
            </select>
          </div>
          <div className={styles.selectContainer}>
            <span className={styles.selectTitle}>Elige tu comuna</span>
            <select className={styles.selectTag} onChange={this.selectComunaHandler}>
              <option value="">¿Qué comuna?</option>
              {comunas}
            </select>
          </div>
        </form>
      </div>

    )
  }
}

export default Header;
