import React from 'react';
import logo from './logo.svg';
import './App.css';

class DrumPadButton extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div class="drum-pad">
        <button class="btn btn-outline-dark">BUTTON</button>
      </div>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div class='container'>
        <div class='row'>
          <DrumPadButton />
          <DrumPadButton />
          <DrumPadButton />
        </div>
        <div class='row'>
          <DrumPadButton />
          <DrumPadButton />
          <DrumPadButton />
        </div>
        <div class='row'>
          <DrumPadButton />
          <DrumPadButton />
          <DrumPadButton />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <container id="drum-machine" class="row py-4" >
        <container class="row py-4" id="display">
          <div class="col-2"></div>
          <div class="col-8">
            <DrumPad />
          </div>
          <div class="col-2"></div>
        </container>
      </container>
      );
  }
}

export default App;
