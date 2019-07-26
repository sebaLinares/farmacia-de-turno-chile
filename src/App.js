import React, { useState } from 'react';
import styles from './App.module.scss';
import Farmacias from './containers/Farmacias';
import Header from './containers/Header';
import Estado from './containers/Estado';
import GoogleSignIn from './containers/GoogleSignIn';

const App = () => {
  const [comunaSelected, setComunaSelected] = useState('');
  const headerHandler = (dataFromHeader) => {
    setComunaSelected(dataFromHeader);
  };
  return (
    <div className={styles.App}>
      <GoogleSignIn />
      <div className={styles.estadoContainer}>
        <Estado />
      </div>
      <div className={styles.farmaciasContainer}>
        <Header comunaHandler={headerHandler} />
        <Farmacias comunaSelected={comunaSelected} />
      </div>
    </div>
  );
};

export default App;
