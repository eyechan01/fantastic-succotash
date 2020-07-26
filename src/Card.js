import React from 'react';
import './Card.css'

const classicCards = {
    height: "100px",
    width: "50px",
    padding: "50px",
    border: "1px solid black",
    display: "inline",
}

function Card (props){
    return (
        <div style={classicCards}>
            <img src = {props.suit} alt="suit" width="40px" height="80px"/>
            {props.number}
        </div>
    );
}

export default Card;