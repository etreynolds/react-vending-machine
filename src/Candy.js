import React from "react";
import { Link } from "react-router-dom";
import candyImg from "./Candy.png";
import "./Candy.css"

function Candy() {
    return (
        <div className="Candy">
            <img src={candyImg} />
            <h1>Eat Me!</h1>
            <h3><Link to="/">Go Back</Link></h3>
            <img src={candyImg} />
        </div>
    );
}

export default Candy;