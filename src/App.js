import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cards,
    score: 0,
    highschore: 0
  };
  // set up the gameover screen
  // below, it states that if the score is 
  // greater than the high score, we then set
  // the state of the score to the highscore
  gameOver = () => {
    if (this.state.score > this.state.highschore) {
      this.setState({highschore: this.state.score}, function() {
        console.log(this.state.highschore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Uh OH! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

}

export default App;
