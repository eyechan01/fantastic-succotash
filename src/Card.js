import React from 'react';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';

function Card (props) {
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

  constructor(suit, number) {
    super(props);
    this.state = {
        suits: ["club", 'diamond', "heart", "spade"],
        values: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
        suit: 'club',
        number: 'A',
        deck: [],
    };
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
        </div>

    );
  }
}

export default Card;
