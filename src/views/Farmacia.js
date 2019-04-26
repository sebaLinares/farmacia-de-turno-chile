import React from 'react';
import './Farmacia.scss';

const farmacia = (props) => {
  return (
    <div className="farmacia-card">
      <div className="nombre-comuna"><h3>{props.localidad_nombre}</h3></div>
      <div className="card-body">
        <h4>{props.local_nombre}</h4>
        <h5>{props.local_direccion}</h5>
      </div>
      <div className="footer">
        <p>Copia esto: <strong>{props.local_lat}, {props.local_lng}</strong></p>
        <p>Pégalo en la búsqueda de <a href="https://www.google.cl/maps">Google Maps</a> para encontrar esta farmacia</p>
      </div>
    </div>
  )
}

export default farmacia;
