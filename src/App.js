import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainBackgroundImage, mainBackgroundColour } from './theme/theme';

class App extends Component {
  PROFILE_URL = './assets/foto-perfil-linkedin.png';

  state = {
    theme: 'light',
  };

  changeTheme = () => {
    const { theme } = this.state;
    if (theme === 'light') {
      this.setState({ theme: 'dark' });
      return;
    }
    this.setState({ theme: 'light' });
  };

  render() {
    const AppDiv = styled.div`
      height: 100vh;
      width: 100vw;
      background: ${mainBackgroundImage};
      position: relative;
      &:before {
        z-index: -1;
        position: absolute;
        content: '';
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: ${mainBackgroundColour};
      }
    `;

    const { theme } = this.state;

    return (
      <ThemeProvider theme={{ mode: theme }}>
        <AppDiv>
          <h1>HI</h1>
          <button type="button" onClick={this.changeTheme}>
            Change me!
          </button>
        </AppDiv>
      </ThemeProvider>
    );
  }
}

export default App;
