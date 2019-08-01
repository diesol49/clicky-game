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

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
}

export default App;
