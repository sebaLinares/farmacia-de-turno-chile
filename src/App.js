import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainBackgroundImage } from './theme/theme';
import FarmaciaGateway from './core/gateways/farmaciaGateway';
import FarmaciaAdapter from './core/adapters/farmaciaAdapter';
import ApiFarmacia from './core/frameworks/ApiFarmacia';

const App = () => {
  const [mode, setMode] = useState('light');
  const [farmacias, setFarmacias] = useState('');
  const AppDiv = styled.div`
    height: 100vh;
    background: ${mainBackgroundImage};
  `;

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

  return (
    <ThemeProvider theme={{ mode }}>
      <AppDiv>
        <div className="menu-icon">
          <div className="bar-1" />
          <div className="bar-2" />
          <div className="bar-3" />
        </div>
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
