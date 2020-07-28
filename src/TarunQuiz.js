import React from 'react';
import {CardTarun} from './Card.js';
import { Link } from 'react-router-dom';

class TarunQuiz extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      cardsTarun: { question: "Super difficult question" , answer: "Answer: Wikipedia" },
      front: true
    };
  }

  switchSide = () => this.setState({front: !this.state.front});

  render(){
    const side = this.state.front ? this.state.cardsTarun.question : this.state.cardsTarun.answer
    return(
      <div>
      TarunQuiz
      <br/>
        <CardTarun text = {side} customClickEvent = {this.switchSide}/>
        <br/><br/>
        <Link to="/">Go home!</Link>
      </div>
    );
  }
}

export default TarunQuiz;
