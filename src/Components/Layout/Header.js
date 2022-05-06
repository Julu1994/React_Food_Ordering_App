import React, { Fragment } from "react";
import foodImg from "../../Images/headerImg.jpeg"
import "./Header.css";

function Header() {
    return (
        <Fragment>
            <header className="header">
                <h1>FoodPanda</h1>
                <button>Cart</button>

            </header>

            <div className="HeaderImage">
                <img src={foodImg} alt="Cover"/>

            </div>
        </Fragment>
    )
}

export default Header;