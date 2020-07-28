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

    let message;
    if(this.state.score > this.state.CPUscore) {
      message = "You Win!"
    }
    if(this.state.score === this.state.CPUscore) {
      message = "You Tie!"
    }
    if(this.state.CPUscore === 0) {
      message = ""
    }
    if(this.state.score === 21) {
      message = "Blackjack!"
    }
    if(this.state.score > 21 || this.state.score < this.state.CPUscore) {
      message = "You Lose!"
    }

    return(
        <div>
            <h1>BLACKJACK FOR THE BOYS AND THE GIRLS</h1>
            {deck}
            <br/><br/><br/><br/>
            <div>
              <button disabled={this.state.hitDisable} onClick={this.deal}>Hit!</button>
              <button onClick={this.reset}>Start over!</button>
              <button disabled={this.state.cpuDisable} onClick={()=>{ this.playCPU(); this.playCPU(); }}>Play CPU!</button>
              <br/>
              Score: {this.state.score}
              <br/>
              <Link to="/">Go home!</Link>
            </div>
            <br/>
            {CPU}
            <br/><br/><br/><br/><br/><br/><br/>
            CPU score: {this.state.CPUscore}
            <br/>
            <h1 style={{color: "red"}}>{message}</h1>
        </div>

    );
  }
}

export default Blackjack;
