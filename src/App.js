import React from 'react';
import './App.css';

class DrumPadButton extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleclick = this.handleclick.bind(this);
  }
  
  handleclick() {
    return new Audio(this.props.sound).play();
  }

  render() {
    return(
      <button id={this.props.dpb} className="drum-pad btn btn-outline-dark px-4 py-3" onClick={this.handleclick}> {this.props.dpb}
        <audio id={this.props.dpb} className="clip" src={this.props.sound}>
        </audio>  
      </button>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    return(
      <div className='container'>
        <div className='row'>
          <DrumPadButton dpb='Q' sound='./sounds/Q.mp3'/>
          <DrumPadButton dpb='W' sound='./sounds/W.mp3'/>
          <DrumPadButton dpb='E' sound='./sounds/E.mp3'/>
        </div>
        <div className='row'>
          <DrumPadButton dpb='A' sound='./sounds/A.mp3'/>
          <DrumPadButton dpb='S' sound='./sounds/S.mp3'/>
          <DrumPadButton dpb='D' sound='./sounds/D.mp3'/>
        </div>
        <div className='row'>
          <DrumPadButton dpb='Z' sound='./sounds/Z.mp3'/>
          <DrumPadButton dpb='X' sound='./sounds/X.mp3'/>
          <DrumPadButton dpb='C' sound='./sounds/C.mp3'/>          
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
      <container id="drum-machine" className="row py-4" >
        <container id="display" className="row py-4">
          <div className="col-2"></div>
          <div className="col-8">
            <DrumPad />
          </div>
          <div className="col-2"></div>
        </container>
      </container>
      );
  }
}

export default App;
