import React, { useState, useEffect } from "react";
import Card from "../SubComponents/Card";

function Drinks() {
    const [drinksItem, setDrinksItem] = useState([]);
    function data() {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const transformedData = data.map((newData) => {
                    return newData.title;
                });
                setDrinksItem(transformedData);
                console.log(drinksItem);
            });
    }

    return (
        <div>
            <button onClick={data}>Click </button>
            <h1>{drinksItem.title}</h1>
        </div>
    );
}

export default Drinks;
