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

  const signOut = () => {
    window.gapi.auth2
      .init({
        client_id: '73756367210-pps5o33esgvgk5e7c13sf8m8v9e92dvp.apps.googleusercontent.com',
      })
      .then(res => res.signOut())
      .catch(err => console.error(err));
  };
  return (
    <div className={styles.App}>
      <GoogleSignIn />
      <button type="button" onClick={signOut}>
        Sign out
      </button>
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
