import React from 'react';
import {Card} from './Card';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';
import { Link } from 'react-router-dom';
import { Button, Alert, Jumbotron } from 'react-bootstrap';

class War extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        suits: [club, diamond, heart, spade],
        values: ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"],
        deck: [],
        CPU: [],
        cardsDealt: [],
        dealDisable: false,
        warDisable: true
    };
  }

  deal = () => {
    let random;
    let card;
    let deck = this.state.deck;
    let CPU = this.state.CPU;
    let cardsDealt = this.state.cardsDealt;
    for(let i = 0; i < 52; i++) {
        random = Math.floor(Math.random() * 52);
        while(cardsDealt.includes(random)) {
            random = Math.floor(Math.random() * 52);
        }
        card = {
            suit: this.state.suits[random % 4],
            number: this.state.values[random % 13],
        }
        
        cardsDealt = cardsDealt.slice().concat(random)
        this.setState({cardsDealt})

        if(i < 26) {
            deck = deck.slice().concat(card)
            this.setState({deck})
        } else {
            CPU = CPU.slice().concat(card)
            this.setState({CPU})
        }
    }
    this.setState({dealDisable: true})
  }

  reset = () => {
    this.setState({cardsDealt: [], deck: [], CPU: []})
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

    let message, type;
    type = ''
    if(this.state.score > this.state.CPUscore) {
      message = "You Win!"
      type = "success"
    }
    if(this.state.score === this.state.CPUscore) {
      message = "You Tie!"
      type = "warning"
    }
    if(this.state.CPUscore === 0) {
      message = ""
      type = ""
    }
    if(this.state.score === 21) {
      message = "Blackjack!"
      type = "success"
    }
    if(this.state.score > 21 || this.state.score < this.state.CPUscore) {
      message = "You Lose!"
      type = "danger"
    }

    return(
        <div>
        <Jumbotron>
          <h1>WAR (FOR THE BOYS AND THE GIRLS)</h1>
          <p>
            War is a super fun classic game you can play by yourself with yourself (like Ethan does with his confessions identity yeye).
          </p>
          <Button variant="light"><Link to="/">Return home!</Link></Button>
        </Jumbotron>
            {deck}
            <br/><br/>
            <div> &nbsp;
              <Button variant="primary" disabled={this.state.dealDisable} onClick={this.deal}>Deal!</Button>{' '}
              <Button variant="danger" onClick={this.reset}>Start over!</Button>{' '}
              <Button variant="info" disabled={this.state.warDisable} onClick={()=>{ this.war()}}>War!</Button>
              <br/>
            </div>
            <br/>
            {CPU}
            <br/>
        </div>

    );
  }
}

export default War;
