import React from 'react';
import taboo from './taboo.png';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';
import { Link } from 'react-router-dom';
import { Button, Alert, Jumbotron } from 'react-bootstrap';

class Taboo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      cardstaboo:
        [{ term: "Michael" , taboos: ["genius", "master", "hurlbut"], used: false},
      { term: "Tarun" , taboos: ["quiz", "wikipedia", "rsi flex"], used: false}],
      currentCard: {term: "", taboos: []}
    };
  }

  deal = () => {
    let card = this.state.cardstaboo[Math.floor(Math.random() * this.state.cardstaboo.length)];
    this.setState({currentCard : card})
  }

  render(){
    const taboosList = this.state.currentCard.taboos.map((item) => {
      return(
        <li>
          {item}
        </li>
      )
    })
    const currentCard =(
        <div style = {{height: "300px", width: "100px", padding: "50px", border: "1px solid black"}}>
          {this.state.currentCard.term}
          <br/>
          <h3>Taboos:</h3>
          <br/>
          <ul>
            {taboosList}
          </ul>
        </div>);

    return(
      <div>
      <Jumbotron>
      <h1>Taboo</h1>
      <img src = {taboo} alt="suit" width="150px" height="150px"/>
      <p>
        Taboo is a game where you'll need to work with someone else.
      </p>
      <Button variant="light"><Link to="/">Return home!</Link></Button>
      </Jumbotron>
        <br/>
        {currentCard}
        <br/>
        <Button variant = "primary" onClick = {this.deal}>Hint Giver</Button>
        <br/>
        <Button variant = "danger">Guesser</Button>
        <br/><br/>
        <Button variant="light"><Link to="/">Return home!</Link></Button>
      </div>
    );
  }
}

export default Taboo;
