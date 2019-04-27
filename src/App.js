import React, { Component } from 'react';
import styles from './App.module.scss';
import Farmacias from './containers/Farmacias';
import Header from './containers/Header';
import Estado from './containers/Estado';

class App extends Component {
  state = {
    comunaSelected: '',
  }

  headerHandler = (dataFromHeader) => {
    this.setState({
      comunaSelected: dataFromHeader
    })
  }
  render() {

    return (
      <div className={styles.App}>
        <div className={styles.estadoContainer}>
          <Estado />
        </div>
        <div className={styles.farmaciasContainer}>
          <Header comunaHandler={this.headerHandler}/>
          <Farmacias comunaSelected={this.state.comunaSelected}/>
        </div>

      </div>
    );
  }
}

export default App;
