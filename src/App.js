import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainBackgroundColor } from './theme/theme';
import FarmaciaGateway from './core/gateways/farmaciaGateway';
import FarmaciaAdapter from './core/adapters/farmaciaAdapter';
import ApiFarmacia from './core/frameworks/ApiFarmacia';
import Sidenav from './containers/Sidenav';

// Components
import MenuIcon from './components/MenuIcon';

// fake
import user from './fakeData/User';
import lastUpdate from './fakeData/LastUpdate';

const AppDiv = styled.div`
  position: relative;
  height: 100vh;
  background: ${mainBackgroundColor};
`;

const App = () => {
  const [mode, setMode] = useState('light');
  const [farmacias, setFarmacias] = useState('');
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
    console.log(farmacias);
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
      <AppDiv>
        <Sidenav {...toggleMenu} isOpen={menuIsOpen} username={username} lastUpdate={lastUpdate} />
        <MenuIcon toggleMenu={toggleMenu} isOpen={menuIsOpen} />
        <h1>Farmacias Shile</h1>
        <button type="button" onClick={changeTheme}>
          change theme
        </button>
        <button type="button" onClick={getFarmacias}>
          GET FARMACIAS
        </button>
      </AppDiv>
    </ThemeProvider>
  );
};

export default App;
