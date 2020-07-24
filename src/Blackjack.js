import React from 'react';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';
import { Link } from 'react-router-dom';

class Blackjack extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        suits: ["club", 'diamond', "heart", "spade"],
        values: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
        suit: 'club',
        number: 'A',
        deck: [],
    };
  }
  
  randomCard = () => {
    let randomSuit = Math.floor(Math.random() * 4);
    let randomValue = Math.floor(Math.random() * 13);
    this.setState({
        suit: this.state.suits[randomSuit],
        number: this.state.values[randomValue],
    });
  }

  deal = () => {
    let randomSuit = Math.floor(Math.random() * 4);
    let randomValue = Math.floor(Math.random() * 13);
    let card = {
        suit: this.state.suits[randomSuit],
        number: this.state.values[randomValue],
    }
    this.state.deck.push(card)
    console.log(this.state.deck)
  }

  render(){
    let suitpic = club
    if(this.state.suit === "club"){
      suitpic = club
    } else if (this.state.suit === "diamond"){
      suitpic = diamond
    } else if (this.state.suit === "heart"){
      suitpic = heart
    } else {
      suitpic = spade
    }
    
    return(
        <div>
            <div style = {{height: "100px", width: "50px", padding: "50px", border: "1px solid black"}}>
                <img src = {suitpic} alt="suit" width="40px" height="80px"/>
                {this.state.number}
            </div>
            <div style = {{height: "100px", width: "50px", padding: "50px", border: "1px solid black"}}>
                <img src = {suitpic} alt="suit" width="40px" height="80px"/>
                {this.state.number}
            </div>
            <button onClick={this.randomCard}>Generate Random Card!</button>
            <br/>
            <button onClick={this.deal}>Play!</button>
            <br/><br/>
            <Link to="/">Go home!</Link>
        </div>
      
    );
  }
}

export default Blackjack;
