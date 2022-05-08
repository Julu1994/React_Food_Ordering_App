import React from "react";
import { useState } from "react";
import Card from "../SubComponents/Card";

function Drinks() {
    const [products, setProducts] = useState([]);
    async () => {
        return fetch("https://fakestoreapi.com/products").then((res) =>
            res.json()
        );
    };

    return <div>{products[0].title}</div>;
}

export default Drinks;
