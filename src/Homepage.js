import React from 'react';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';

class Homepage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      cards52:
        { suit: "club" , number: "5" }
    };
  }
  render(){
    var suitpic = club
    if(this.state.cards52.suit === "club"){
      suitpic = club
    } else if (this.state.cards52.suit === "diamond"){
      suitpic = diamond
    } else if (this.state.cards52.suit === "heart"){
      suitpic = heart
    } else {
      suitpic = spade
    }
    return(
      <div style = {{height: "100px", width: "50px", padding: "50px", border: "1px solid black"}}>
        <img src= {suitpic} alt="suit" width="40px" height="80px"/>
        {this.state.cards52.number}
      </div>
    );
  }
}

export default Homepage;
