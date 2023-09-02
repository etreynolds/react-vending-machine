import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>Pick a snackie from the vending machine!</h1>
            <h1><Link to="/pop">Pop</Link></h1>
            <h1><Link to="/cheetos">Cheetos</Link></h1>
            <h1><Link to="/candy">Candy</Link></h1>
        </div>
    );
}


export default VendingMachine;