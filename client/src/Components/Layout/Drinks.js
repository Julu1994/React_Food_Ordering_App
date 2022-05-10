// import React from "react";
// import { useState } from "react";
// import Card from "../SubComponents/Card";

// function Drinks() {
//     const [drink, setDrink] = useState([]);
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             setDrink(data.drinks);
//         });

//     return <div>{<Card drinksInfo={drink} />}</div>;
// }

// export default Drinks;
