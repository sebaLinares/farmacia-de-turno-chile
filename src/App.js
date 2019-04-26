import React, { Component } from 'react';
import './App.scss';
import './containers/Farmacias.scss'
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
      <div className="App">
        <div className="Estado">
          <Estado />
        </div>
        <div className="Farmacias">
          <Header comunaHandler={this.headerHandler}/>
          <Farmacias comunaSelected={this.state.comunaSelected}/>
        </div>

      </div>
    );
  }
}

export default App;
