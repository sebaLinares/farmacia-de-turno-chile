import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// Core
import FarmaciaAdapter from './core/adapters/farmaciaAdapter';
// import FarmaciaGateway from './core/gateways/farmaciaGateway';
// import ApiFarmacia from './core/frameworks/ApiFarmacia';

// Styled components
import StyledLogo from './StyledComps/StyledLogo';
import StyledAppDiv from './StyledComps/StyledAppDiv';
import StyledLogoDiv from './StyledComps/StyledLogoDiv';

// Pages
import Routes from './Routes';
import Sidenav from './pages/Sidenav';

// Components
import MenuIcon from './components/MenuIcon';

// Others
import user from './fakeData/User';
import lastUpdate from './fakeData/LastUpdate';

// // db
import db from './Database/db';

// utils
import { getComunasFromRegion, getFarmaciasByComuna } from './utils/functions';

const App = ({ history }) => {
  const [mode, setMode] = useState('light');
  const [farmacias, setFarmacias] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [comunas, setComunas] = useState([]);
  const [farmaciasEnComunaElegida, setFarmaciasEnComunaElegida] = useState([]);

  const changeTheme = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const farmaciaAdapter = new FarmaciaAdapter();
    const farmaciasLimpias = farmaciaAdapter.farmaciasToView(db);
    setFarmacias(farmaciasLimpias);
  }, []);

  // // UNCOMMENT NI PRODUCTION
  // useEffect(() => {
  //   let didCancel = false;
  //   const getFarmacias = async () => {
  //     const apiFarmacia = new ApiFarmacia([
  //       process.env.REACT_APP_FARMACIAS_TURNO_URL,
  //       process.env.REACT_APP_FARMACIAS_URGENCIA_URL,
  //     ]);
  //     const farmaciaAdapter = new FarmaciaAdapter();
  //     const farmaciaGateway = new FarmaciaGateway(apiFarmacia, farmaciaAdapter);
  //     try {
  //       const farmaciasTurno = await farmaciaGateway.getFarmaciasTurno();
  //       const farmaciasUrgencia = await farmaciaGateway.getFarmaciasUrgencia();
  //       if (!didCancel) {
  //         setFarmacias([...farmaciasTurno, ...farmaciasUrgencia]);
  //         console.log([...farmaciasTurno, ...farmaciasUrgencia]);
  //       }
  //     } catch (err) {
  //       if (!didCancel) {
  //         console.error(err);
  //       }
  //     }
  //   };
  //   getFarmacias();
  //   return () => {
  //     didCancel = true;
  //   };
  // }, []);

  const filterComunasByRegion = (regionId) => {
    const comunasWithId = getComunasFromRegion(regionId, farmacias);
    setComunas(comunasWithId);
  };

  const getFarmaciasFromComuna = (comunaId) => {
    const farmaciasFromComuna = getFarmaciasByComuna(comunaId, farmacias);
    setFarmaciasEnComunaElegida(farmaciasFromComuna);
  };

  const toggleMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  };

  const goInicio = () => {
    history.push('/');
  };

  const { username } = user;

  return (
    <ThemeProvider theme={{ mode }}>
      <StyledAppDiv>
        <Sidenav
          {...toggleMenu}
          isOpen={menuIsOpen}
          username={username}
          lastUpdate={lastUpdate}
          changeTheme={changeTheme}
          mode={mode}
        />
        <MenuIcon toggleMenu={toggleMenu} isOpen={menuIsOpen} />
        <StyledLogoDiv onClick={goInicio}>
          <StyledLogo />
        </StyledLogoDiv>
        <Routes
          farmaciasEnComunaElegida={farmaciasEnComunaElegida}
          filterComunasByRegion={filterComunasByRegion}
          getFarmaciasFromComuna={getFarmaciasFromComuna}
          comunas={comunas}
        />
      </StyledAppDiv>
    </ThemeProvider>
  );
};

App.propTypes = {
  history: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  history: {},
};

export default withRouter(App);
