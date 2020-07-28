import React from 'react';
import './Card.css'
import rsi from './rsi.png';

const classicCards = {
    height: "100px",
    width: "50px",
    padding: "50px",
    border: "1px solid black",
    display: "inline",
}

const tarunCards = {
  height: "150px",
  width: "150px",
  padding: "50px",
  border: "1px solid blue",
}

function Card (props){
    return (
        <div style={classicCards}>
            <img src = {props.suit} alt="suit" width="40px" height="80px"/>
            {props.number}
        </div>
    );
}

function CardTarun (props){
  return(
    <div style = {tarunCards} onClick = {props.customClickEvent}>
      {props.text}
      <br/>
      <img src = {rsi} width = "80px" height = "80px"/>
    </div>
  )
}

export {Card, CardTarun};
