import React from "react";
import './App.css';
import imgSrc from "./ProfileImg.jpg";
import { useState } from 'react';

class App extends React.Component {

  state = {
    Person: {
      fullName: "Fatima Zohra BELABDI",
      imgSrc: imgSrc,
      profession: "Software developer",
      bio: "A developer, fitness and lifestyle passionate, captivating motivational for new challenges."
    },
    show: false,
    // For the show the time since
    counter: 0
  };
  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  componentDidMount() {
    // After 1 seconde increment counter +1
    setInterval(this.incrementCounter, 1000);
  }
  // Show or Hide Profile
  handleClick = () => this.setState({ show: !this.state.show })

  render() {
    const styleProfile = {
      color: '#FFFFFF', display: 'flex', margin: "40px 60px",
      justifyItems: 'center', textAlign: 'start',

    }

    return (
      <>

        <div className="show">
          <h1>The component has mounted</h1>
          <h2>{this.state.counter}</h2>
          {/* If Show is true show the profile and the button set to Hide the profile else do the opposite */}
          <button onClick={this.handleClick}> {this.state.show ? 'Hide Profile' : 'Show Profile'} </button>
          {(this.state.show) &&
            <div style={styleProfile}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
                <div>
                  <img src={this.state.Person.imgSrc} alt="Profile Image" /></div>
              </div>
              <div style={{ margin: '20px 50px' }} >
                <h1>{this.state.Person.fullName}</h1>
                <h4>{this.state.Person.profession}</h4>
                <span> {this.state.Person.bio} </span>
              </div>
            </div>
          }
        </div>

      </>
    )
  }
}

export default App;
