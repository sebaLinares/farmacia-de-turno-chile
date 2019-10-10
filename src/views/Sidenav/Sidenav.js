import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidenav.module.scss';

const Sidenav = ({ sidenavState }) => {
  Sidenav.propTypes = {
    sidenavState: PropTypes.string.isRequired,
  };
  const profileUrl = './../../assets/foto-perfil-linkedin.png';
  return (
    <div className="SidenavWrapper">
      <div className="profile-container">
        <img src={profileUrl} alt="" />
      </div>
      <p className="saludo">
        Sebastián, te invito a ver otros proyectos y seguirme en las siguientes RRSS
      </p>
      <div className="rrss">
        <div className="github" />
        <div className="linkedin" />
        <div className="twitter" />
      </div>
      <div className="actualizaciones">
        <p>Última actualización farmacias</p>
        <p>FECHA TODAVIA NO ESTA</p>
      </div>
      <div className="logout">
        <p>Logout</p>
        <div className="logout-btn" />
      </div>
    </div>
  );
};

export default Sidenav;
