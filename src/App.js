import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      kit: 'sdasd',
      volume: 0.5,
      power: true
    };
  }

  render() {

    const heater1 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3']});
    const heater2 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3']});
    const heater3 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3']});
    const heater4 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3']});
    const heater5 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3']});
    const heater6 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3']});
    const heater7 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3']});
    const heater8 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3']});
    const heater9 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']});
      
    const piano1 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3']});
    const piano2 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3']});
    const piano3 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3']});
    const piano4 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3']});
    const piano5 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3']});
    const piano6 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3']});
    const piano7 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3']});
    const piano8 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3']});
    const piano9 = new Howl({src: ['https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']});
    

    const onPlaySound = (index) => {
      switch (index) {
        case 1:
          this.state.kit === 'heater'
            ? heater1.play()
            : piano1.play();
            break;
        case 2:
          this.state.kit === 'heater'
            ? heater2.play()
            : piano2.play();
            break;            
        case 3:
          this.state.kit === 'heater'
            ? heater3.play()
            : piano3.play();
            break;            
        case 4:
          this.state.kit === 'heater'
            ? heater4.play()
            : piano4.play();
            break;          
        case 5:
          this.state.kit === 'heater'
            ? heater5.play()
            : piano5.play();
            break;          
        case 6:
          this.state.kit === 'heater'
            ? heater6.play()
            : piano6.play();
            break;          
        case 7:
          this.state.kit === 'heater'
            ? heater7.play()
            : piano7.play();
            break;          
        case 8:
          this.state.kit === 'heater'
            ? heater8.play()
            : piano8.play();
            break;                      
        case 9:
          this.state.kit === 'heater'
            ? heater9.play()
            : piano9.play();
            break;                      
      }
    }

    return (
      <div id="drum-machine">
        <div id="display">
          <div className="drum-pad" onClick={() => onPlaySound(1)}>Q</div>
          <div className="drum-pad" onClick={() => onPlaySound(2)}>W</div>
          <div className="drum-pad" onClick={() => onPlaySound(3)}>E</div>
          <div className="drum-pad" onClick={() => onPlaySound(4)}>A</div>
          <div className="drum-pad" onClick={() => onPlaySound(5)}>S</div>
          <div className="drum-pad" onClick={() => onPlaySound(6)}>D</div>
          <div className="drum-pad" onClick={() => onPlaySound(7)}>Z</div>
          <div className="drum-pad" onClick={() => onPlaySound(8)}>X</div>
          <div className="drum-pad" onClick={() => onPlaySound(9)}>C</div>
        </div>
      </div>
    );
  }
}

export default App;
