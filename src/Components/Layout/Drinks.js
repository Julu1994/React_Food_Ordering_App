import React from "react";
import { useState } from "react";
import Card from "../SubComponents/Card";

function Drinks() {
    const [products, setProducts] = useState([]);
    fetch("https://fakestoreapi.com/products/1")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    console.log(products);

    return <div>{products[0].title}</div>;
}

export default Drinks;
