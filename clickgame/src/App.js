import React, { Component } from 'react';
// var Shuffle = require('react-shuffle');
import './App.css';
import Jumbotron from "./components/Jumbotron"
import Container from "./components/Container"
import Counter from "./components/Counter"
import PictureCard from "./components/PictureCard"
import choices from "./choices.json";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


class App extends Component {
  state = {
    choices
  };


render() {
  const shuffledChoices = shuffleArray(this.state.choices);
    return (
      <Container>
      <Jumbotron/>
      <Counter/>
      
      {shuffledChoices.map(choices => (
      <PictureCard
      suffle={this.shuffleArray}
      id={choices.id}
      image={choices.image}
      />))}
      </Container>
    );
  }
}

export default App;
