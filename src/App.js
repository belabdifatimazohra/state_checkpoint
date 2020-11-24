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
    setInterval(this.incrementCounter, 1000);
  }
  // Show Profile
  handleClick = () => this.setState({ show: true })

  render() {
    const styleProfile = {
      color: '#FFFFFF', display: 'flex', margin: "40px 60px",
      justifyItems: 'center', textAlign: 'start',

    }

    return (
      <>
        {/* If Show is true show the profile and not the button of show the profile */}
        <div className="show">
          <h1>The component has mounted</h1>
          <h2>{this.state.counter}</h2>
          {(this.state.show) ?
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
            // Else show the button Show Profile
            : <button onClick={this.handleClick}> Show Profile </button>
          }
        </div>

      </>
    )
  }
}

export default App;
