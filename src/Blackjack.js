import React from 'react';
import {Card} from './Card';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';
import { Link } from 'react-router-dom';

class Blackjack extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        suits: [club, diamond, heart, spade],
        values: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
        deck: [],
        CPU: [],
        score: 0,
    };
  }

  deal = () => {
    let randomSuit = Math.floor(Math.random() * 4);
    let randomValue = Math.floor(Math.random() * 13);
    let card = {
        suit: this.state.suits[randomSuit],
        number: this.state.values[randomValue],
    }
    const deck = this.state.deck.slice().concat(card)
    this.setState({deck})

    typeof(card.number) === "number" ?
      this.setState({score: this.state.score + card.number}) :
      (
        card.number === "A" ?
        this.setState({score: this.state.score + 1}) : this.setState({score: this.state.score + 10})
      )
  }

  playCPU = () => {
    let randomSuit = Math.floor(Math.random() * 4);
    let randomValue = Math.floor(Math.random() * 13);
    let card = {
        suit: this.state.suits[randomSuit],
        number: this.state.values[randomValue],
    }
    const deck = this.state.CPU.slice().concat(card)
    this.setState({CPU: deck})
    console.log(this.state.CPU)
  }

  reset = () => {
    this.setState({deck: [], CPU: [], score: 0})
  }

  render(){
    const deck = this.state.deck.map((card, index) => {
      return (
        <span key = {index}>
          <Card suit = {card.suit} number = {card.number}/>
        </span>
      );
    })

    const CPU = this.state.CPU.map((card, index) => {
      return (
        <span key = {index}>
          <Card suit = {card.suit} number = {card.number}/>
        </span>
      );
    })

    let score = this.state.score
    if(score == 21) {
      score = "Blackjack!"
    }
    if(score > 21) {
      score = "You Lose!"
    }

    return(
        <div>
            {deck}
            <br/><br/><br/><br/>
            <div>
              <button onClick={this.deal}>Hit!</button>
              <button onClick={this.reset}>Start over!</button>
              <button onClick={()=>{ this.playCPU(); this.playCPU(); }}>Play CPU!</button>
              <br/>
              Score: {score}
              <br/>
              <Link to="/">Go home!</Link>
            </div>
            <br/>
            {CPU}
        </div>

    );
  }
}

export default Blackjack;
