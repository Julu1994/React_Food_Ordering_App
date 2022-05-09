import React, { useState, useEffect } from "react";
import Card from "../SubComponents/Card";

function Drinks() {
    const [drinksItem, setDrinksItem] = useState();

    fetch("https://fakestoreapi.com/products/1").then((response) =>
        console.log(response)
    );

    return <div className="app"></div>;
}

export default Drinks;
