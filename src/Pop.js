import React from "react";
import { Link } from "react-router-dom";
import popImg from "./Pop.png";
import "./Pop.css"

function Pop() {
    return (
        <div className="Pop">
            <img src={popImg} />
            <h1>Drink Me!</h1>
            <h3><Link to="/">Go Back</Link></h3>
            <img src={popImg} />
        </div>
    );
}

export default Pop;