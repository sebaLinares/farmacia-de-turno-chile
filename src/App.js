import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainBackgroundImage, mainBackgroundColour } from './theme/theme';

class App extends Component {
  constructor() {
    super(props);
    this.state = {
      comunaSelected: '',
    };
  }

  headerHandler = (dataFromHeader) => {
    setComunaSelected(dataFromHeader);
  };

  render() {
    const AppDiv = styled.div`
      position: relative;
      display: flex;
      flex-wrap: wrap;
      // padding: 50px 20px;
      width: auto;
      box-sizing: border-box;
      justify-content: space-between;
    `;
    return <AppDiv />;
  }
}

export default App;
