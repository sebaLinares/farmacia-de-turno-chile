import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import FarmaciaGateway from './core/gateways/farmaciaGateway';
import FarmaciaAdapter from './core/adapters/farmaciaAdapter';
import ApiFarmacia from './core/frameworks/ApiFarmacia';
import Sidenav from './pages/Sidenav';

import StyledLogo from './StyledComps/StyledLogo';

import Routes from './Routes';

// Components
import MenuIcon from './components/MenuIcon';

// Others
import StyledAppDiv from './StyledComps/StyledAppDiv';
import StyledLogoDiv from './StyledComps/StyledLogoDiv';

// fake
import user from './fakeData/User';
import lastUpdate from './fakeData/LastUpdate';

// db
import db from './Database/db';

// utils
import { getComunasFromRegion, getFarmaciasByComuna } from './utils/functions';

const App = () => {
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
    console.log(farmaciasLimpias);
    setFarmacias(farmaciasLimpias);
  }, []);

  // UNCOMMENT NI PRODUCTION
  // // useEffect(() => {
  // //   let didCancel = false;
  // //   const getFarmacias = async () => {
  // //     const apiFarmacia = new ApiFarmacia(process.env.REACT_APP_FARMACIA_URGENCIA_URL);
  // //     const farmaciaAdapter = new FarmaciaAdapter();
  // //     const farmaciaGateway = new FarmaciaGateway(apiFarmacia, farmaciaAdapter);
  // //     try {
  // //       const farmaciasDeApi = await farmaciaGateway.getFarmaciasUrgencia();
  // //       if (!didCancel) {
  // //         setFarmacias(farmaciasDeApi);
  // //         console.log(farmaciasDeApi);
  // //       }
  // //     } catch (err) {
  // //       if (!didCancel) {
  // //         console.err(err);
  // //       }
  // //     }
  // //   };

  // //   getFarmacias();
  // //   return () => {
  // //     didCancel = true;
  // //   };
  // // }, []);

  const filterComunasByRegion = (regionId) => {
    const comunasWithId = getComunasFromRegion(regionId, farmacias);
    setComunas(comunasWithId);
  };

  const getFarmaciasFromComuna = (comunaId) => {
    const farmaciasFromComuna = getFarmaciasByComuna(comunaId, farmacias);
    console.log(farmaciasFromComuna);
  };

  const toggleMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
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
        <StyledLogoDiv>
          <StyledLogo />
        </StyledLogoDiv>
        <Routes
          farmaciasEnComunaElegida={farmaciasEnComunaElegida}
          filterComunasByRegion={filterComunasByRegion}
          getFarmaciasFromComuna={getFarmaciasFromComuna}
          comunas={comunas}
        />
        {/* <h1>Farmacias Shile</h1>
          <button type="button" onClick={changeTheme}>
          change theme
          </button>
          <button type="button" onClick={getFarmacias}>
          GET FARMACIAS
          </button> */}
      </StyledAppDiv>
    </ThemeProvider>
  );
};

export default App;
