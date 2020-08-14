import React from 'react';
import {Card} from './Card';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';
import { Link } from 'react-router-dom';
import { Button, Alert, Jumbotron } from 'react-bootstrap';

class Blackjack extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        suits: [club, diamond, heart, spade],
        values: ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"],
        deck: [],
        CPU: [],
        score: 0,
        CPUscore: 0,
        hitDisable: false,
        cpuDisable: true,
    };
  }

  deal = () => {
    let random = Math.floor(Math.random() * 52);
    let card = {
        suit: this.state.suits[random % 4],
        number: this.state.values[random % 13],
    }
    const deck = this.state.deck.slice().concat(card)
    this.setState({deck, cpuDisable: false})

    if(random % 13 < 9) {
      this.setState({score: this.state.score + random % 13 + 1})
    }
    else {
      this.setState({score: this.state.score + 10})
    }

    if(this.state.score > 21) {
      this.setState({hitDisable: true})
    }
  }

  playCPU = () => {
    let random1 = Math.floor(Math.random() * 52);
    let random2 = Math.floor(Math.random() * 52);
    const deck = this.state.CPU.slice().concat(
      { suit: this.state.suits[random1 % 4], number: this.state.values[random1 % 13] },
      { suit: this.state.suits[random2 % 4], number: this.state.values[random2 % 13] }
    )
    this.setState({CPU: deck, hitDisable: true, cpuDisable: true})

    if(random1 % 13 < 9) {
      if(random2 % 13 < 9) {
        this.setState({CPUscore: this.state.CPUscore + random1 % 13 + random2 % 13 + 2})
      }
      else {
        this.setState({CPUscore: this.state.CPUscore + random1 % 13 + 11})
      }
    }
    else {
      if(random2 % 13 < 9) {
        this.setState({CPUscore: this.state.CPUscore + random2 % 13 + 11})
      }
      else {
        this.setState({CPUscore: this.state.CPUscore + 20})
      }
    }
  }

  reset = () => {
    this.setState({deck: [], CPU: [], score: 0, CPUscore: 0, hitDisable: false, cpuDisable: true})
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
          <h1>Blackjack (FOR THE BOYS AND THE GIRLS)</h1>
          <p>
            Blackjack is a super fun classic game you can play by yourself.
          </p>
          <Button variant="light"><Link to="/">Return home!</Link></Button>
        </Jumbotron>
            {deck}
            <br/><br/>
            <div> &nbsp;
              <Button variant="primary" disabled={this.state.hitDisable} onClick={this.deal}>Hit!</Button>{' '}
              <Button variant="danger" onClick={this.reset}>Start over!</Button>{' '}
              <Button variant="info" disabled={this.state.cpuDisable} onClick={()=>{ this.playCPU(); this.playCPU(); }}>Play CPU!</Button>
              <br/>
              &nbsp; Score: {this.state.score}
              <br/>
            </div>
            <br/>
            {CPU}
            <br/><br/>
            &nbsp; CPU score: {this.state.CPUscore}
            <br/>
            <Alert variant={type}>{message}</Alert>
        </div>

    );
  }
}

export default Blackjack;
