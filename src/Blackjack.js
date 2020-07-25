import React from 'react';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';
import { Link } from 'react-router-dom';

function Card (props){
  let suitpic = club
    if(props.suit === "club"){
      suitpic = club
    } else if (props.suit === "diamond"){
      suitpic = diamond
    } else if (props.suit === "heart"){
      suitpic = heart
    } else {
      suitpic = spade
    }
  return (
      <div style = {{height: "100px", width: "50px", padding: "50px", border: "1px solid black"}}>
          <img src = {suitpic} alt="suit" width="40px" height="80px"/>
          {props.number}
      </div>
  );}

class Blackjack extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        suits: ["club", 'diamond', "heart", "spade"],
        values: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
        deck: [{suit: 'club', number: '5'}],
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
    console.log(this.state.deck)
  }

  render(){
    const deck = this.state.deck.map((card, index) =>
    {
      return (
        <div key = {index}>
          <Card suit = {card.suit} number = {card.number}/>
        </div>
      );
    }
  )
    return(
        <div>
          <div>
            {deck}
          </div>
            <br/>
            <button onClick={this.deal}>Play!</button>
            <br/><br/>
            <Link to="/">Go home!</Link>
        </div>

    );
  }
}

export default Blackjack;
