import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import FarmaciaGateway from './core/gateways/farmaciaGateway';
import FarmaciaAdapter from './core/adapters/farmaciaAdapter';
import ApiFarmacia from './core/frameworks/ApiFarmacia';
import Sidenav from './pages/Sidenav';

// Pages
import Inicio from './pages/Inicio';
import Regiones from './pages/Regiones';
import Comunas from './pages/Comunas';
import Farmacias from './pages/Farmacias';
import Farmacia from './pages/Farmacia';

// Components
import MenuIcon from './components/MenuIcon';

// Others
import LOGO from './assets/logo-thlp.png';
import StyledAppDiv from './StyledComps/StyledAppDiv';
import StyledLogoDiv from './StyledComps/StyledLogoDiv';

// fake
import user from './fakeData/User';
import lastUpdate from './fakeData/LastUpdate';

const App = () => {
  const [mode, setMode] = useState('light');
  const setFarmacias = useState('')[1];
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const changeTheme = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  const getFarmacias = async () => {
    const apiFarmacia = new ApiFarmacia(process.env.REACT_APP_FARMACIA_URGENCIA_URL);
    const farmaciaAdapter = new FarmaciaAdapter();
    const farmaciaGateway = new FarmaciaGateway(apiFarmacia, farmaciaAdapter);

    const farmaciasDeApi = await farmaciaGateway.getFarmaciasUrgencia();
    setFarmacias(farmaciasDeApi);
    console.log(farmaciasDeApi);
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
    <Router>
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
            <img alt="logo" src={LOGO} />
          </StyledLogoDiv>
          <Switch>
            <Route exact path="/Inicio">
              <Inicio />
            </Route>
            <Route exact path="/regiones">
              <Regiones />
            </Route>
            <Route exact path="/comunas">
              <Comunas />
            </Route>
            <Route exact path="/farmacias">
              <Farmacias />
            </Route>
            <Route exact path="/farmacia">
              <Farmacia />
            </Route>
          </Switch>
          {/* <h1>Farmacias Shile</h1>
          <button type="button" onClick={changeTheme}>
          change theme
          </button>
          <button type="button" onClick={getFarmacias}>
          GET FARMACIAS
          </button> */}
        </StyledAppDiv>
      </ThemeProvider>
    </Router>
  );
};

export default App;
