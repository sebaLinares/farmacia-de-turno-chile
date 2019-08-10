import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import styles from './App.module.scss';
import Farmacias from './containers/Farmacias';
import Header from './containers/Header';
import Estado from './containers/Estado';
import GoogleAuth from './containers/GoogleAuth';
import theme from './theme/theme';

const App = () => {
  const [comunaSelected, setComunaSelected] = useState('');
  const headerHandler = (dataFromHeader) => {
    setComunaSelected(dataFromHeader);
  };
  const AppDiv = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    // padding: 50px 20px;
    width: auto;
    box-sizing: border-box;
    justify-content: space-between;
  `;

  const EstadoContainer = styled.div`
    min-width: 300px;
    height: 250px;
  `;

  const FarmaciasContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;
    flex-grow: 1;
    padding-bottom: 50px;
  `;

  return (
    <AppDiv>
      <ThemeProvider theme={theme}>
        <GoogleAuth />
      </ThemeProvider>
      <EstadoContainer>
        <Estado />
      </EstadoContainer>
      <FarmaciasContainer>
        <Header comunaHandler={headerHandler} />
        <Farmacias comunaSelected={comunaSelected} />
      </FarmaciasContainer>
    </AppDiv>
  );
};

export default App;
