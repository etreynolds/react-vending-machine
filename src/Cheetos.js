import React from "react";
import { Link } from "react-router-dom";
import cheetosImg from "./Cheetos.png";
import "./Cheetos.css"

function Cheetos() {
    return (
        <div className="Cheetos">
            <img src={cheetosImg} />
            <h1>Eat Me!</h1>
            <h3><Link to="/">Go Back</Link></h3>
            <img src={cheetosImg} />
        </div>
    );
}

export default Cheetos;