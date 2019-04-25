import React, { Component } from 'react';
import './App.css';
import './containers/Farmacias.css'
import * as data from './db.json';
import Farmacias from './containers/Farmacias';

class App extends Component {
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
  regiones = [
    { nombre: 'ARICA Y PARINACOTA', fk_region: 1 },
    { nombre: 'REGION DE TARAPACA', fk_region: 2 },
    { nombre: 'REGION DE ANTOFAGASTA', fk_region: 3 },
    { nombre: 'REGION DE ATACAMA', fk_region: 4 },
    { nombre: 'REGION DE COQUIMBO', fk_region: 5 },
    { nombre: 'REGION DE VALPARAISO', fk_region: 6 },
    { nombre: 'REGION METROPOLITANA', fk_region: 7 },
    { nombre: 'REGION DEL LIBERTADOR GENERAL BERNADO OHIGGINS', fk_region: 8 },
    { nombre: 'REGION DEL MAULE', fk_region: 9 },
    { nombre: 'REGION DEL BIO-BIO', fk_region: 10 },
    { nombre: 'REGION DE LA ARAUCANIA', fk_region: 11 },
    { nombre: 'REGION DE LOS RIOS', fk_region: 12 },
    { nombre: 'REGION DE LOS LAGOS', fk_region: 13 },
    { nombre: 'REGION DE AYSEN DEL GENERAL CARLOS IBAÑEZ DEL CAMPO', fk_region: 14 },
    { nombre: 'REGION DE MAGALLANES Y LA ANTARTICA CHILENA', fk_region: 15 },
    { nombre: 'REGION DE ÑUBLE', fk_region: 16 },
  ]

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

    // axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://farmanet.minsal.cl/maps/index.php/ws/getLocalesTurnos')}`)
    // .then(response => {
    //   const farmaciasDeTurno = JSON.parse(response.data.contents)
    //   let comunas = farmaciasDeTurno.map(farmacia => farmacia.comuna_nombre)
    //   let stateCopy = {...this.state.farmacias}
    //   stateCopy.comunas = comunas
    //   this.setState({
    //     farmacias: stateCopy
    //   })
    // })
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
  }

  render() {

    // Crear listde regiones
    let regiones = [];
    let comunas = [];
    let farmacias = [];
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

      // Lista de farmacias segun comuna elegida
      let farmaciasList = this.farmaciasDeTurno.filter((farmacia)=> farmacia.comuna_nombre === this.state.comunaSelected)
      farmacias = farmaciasList.map((farmacia, index) => {
        return (
          <div className="card text-center mt-4 mr-4" style={{width: '45%'}} key={index}>
            <div className="card-body">
              <h5 className="card-title">{farmacia.localidad_nombre}</h5>
              <h5 className="card-title"><strong>{farmacia.local_nombre}</strong></h5>
              <p className="card-text">{farmacia.local_direccion}</p>
              <p className="card-text"><small className="text-muted">Copia esto: <strong>{farmacia.local_lat}, {farmacia.local_lng}</strong></small></p>
              <p className="card-text"><small className="text-muted">Pégalo en la búsqueda de <a href="https://www.google.cl/maps">Google Maps</a> para encontrar tu farmacia.</small></p>
            </div>
          </div>
        )
      })


    }

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Descubre la farmacia de turno en tu comuna</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-12">
              <form className="form-container">
                <div className="form-group">
                  <span className="select-title">Elige tu región</span>
                  <select className="form-control" onChange={this.selectRegionHandler}>
                    <option value="">Elige una región</option>
                    {options}
                  </select>
                </div>
                <div className="form-group">
                  <span className="select-title">Elige tu comuna</span>
                  <select className="form-control" onChange={this.selectComunaHandler}>
                    <option value="">Elige una comuna</option>
                    {comunas}
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex flex-container flex-wrap justify-content-around">
              {farmacias}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
