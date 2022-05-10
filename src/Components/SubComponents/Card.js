import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="main-div">
            <div className="card">
                {/* <img className="card-img" src={drinks.image} alt="" /> */}
                <h1 className="card-tittle">{props.title}</h1>
                {/* <p className="card-description">{drinks.price}</p> */}
                <button className="card-button">Buy</button>
            </div>
        </div>
    );
}

export default Card;
