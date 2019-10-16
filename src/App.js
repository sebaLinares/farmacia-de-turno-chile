import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainBackgroundImage } from './theme/theme';

const App = () => {
  const [mode, setMode] = useState('light');
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
      </AppDiv>
    </ThemeProvider>
  );
};

export default App;
