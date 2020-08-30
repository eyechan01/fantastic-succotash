import React from 'react';
import club from './club.jpg';
import diamond from './diamond.jpg';
import heart from './heart.jpg';
import spade from './spade.jpg';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

class Homepage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      cards52:
        { suit: "spade" , number: "5" }
    };
  }
  
  changeSuit = () => {
    this.setState({
      cards52: {
        suit: "club",
        number: this.state.cards52.number
      }
    });
  }

  render(){
    let suitpic = club
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
      <div>
        <div>

        <Jumbotron>
          <h1>Welcome to the Quarantine Games.</h1>
          <p>
            These are the bored games reimagined with a modern perspective.
          </p>
        </Jumbotron>

<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Card Games" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/blackjack" class="nav-link active">1. Blackjack</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/war" class="nav-link active">2. War</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/poker" class="nav-link active">3. Poker</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/TarunQuiz" class="nav-link active">4. Tarun Quiz</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/taboo" class="nav-link active">5. Taboo</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/set" class="nav-link active">6. Set</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </div>
        <br/>
        <div style = {{height: "100px", width: "50px", padding: "50px", border: "1px solid black"}}>
          <img src = {suitpic} alt="suit" width="40px" height="80px"/>
          {this.state.cards52.number}
        </div>
        <br/><br/><br/><br/><br/><br/>
        <button id="suitButton" name="club" onClick={this.changeSuit}>Clubz for no reason</button>
      </div>
    );
  }
}

export default Homepage;
