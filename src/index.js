import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const KEYDATA = {
  'Q': [81,'Heater-1','https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'], 
  'W': [87,'Heater-2','https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'],
  'E': [69,'Heater-3','https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'],
  'A': [65,'Heater-4','https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'],
  'S': [83,'Clap','https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'],
  'D': [68,'Open-HH','https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'],
  'Z': [90,"Kick-n'-Hat",'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'],
  'X': [88,'Kick','https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'],
  'C': [67,'Closed-HH','https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clickPlay(e);
  }

  render() {
    return(
      <button id={this.props.soundUri} className="drum-pad btn btn-outline-dark px-4 py-3" onClick={this.handleClick} value={this.props.msg}> 
      {this.props.keyID}
        <audio id={this.props.keyID} className="clip" src={this.props.soundUri} type="audio/mp3"></audio>  
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      keyCode: '',
      msg: 'No Sound',
      currentSound: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleClick(e) {
    this.setState({
      currentSound: e.target.children[0].id,
      msg: e.target.value
    });
  }

  handleKeyPress(e) { 
    if(KEYDATA.hasOwnProperty(e.key.toUpperCase()))
      document.getElementById(e.key.toUpperCase()).play()
  }

  playSound(){
    if(this.state.currentSound)
    document.getElementById(this.state.currentSound).play();
  }

  render() {
    let message = this.state.msg;
    let counter = 1;
    this.playSound();

    return (
      <container id="drum-machine" className="row py-4" >
        <container className="row py-4 mt-5">
          <div className="col-2"></div>
          <div className="col-5 text-center">
            <div className='container'>
            <h1>Drum Machine</h1>
            <br />
              { Object.entries(KEYDATA).map(([k,v]) => {
                return (<DrumPad 
                  keyID={k} 
                  keyCode={v[0]} 
                  msg={v[1]} 
                  soundUri={v[2]}
                  clickPlay={this.handleClick}
                  keyPlay={this.handleKeyPress}
                />)
              })
              }
            </div>
            <br />
            <p id="display" class="py-3">Sound: {message}</p>
          </div>
          <div className="col-2"></div>
        </container>
      </container>
      );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
