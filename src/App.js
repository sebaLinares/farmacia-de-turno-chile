import React from 'react';
import styled from 'styled-components';

const App = () => {
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
};

export default App;
