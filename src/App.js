import React from 'react';
import styled from 'styled-components';

const App = () => {
  const AppDiv = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: auto;
    box-sizing: border-box;
    justify-content: space-between;
  `;
  return (
    <AppDiv>
      <h1>Farmacias Chile</h1>
    </AppDiv>
  );
};

export default App;
