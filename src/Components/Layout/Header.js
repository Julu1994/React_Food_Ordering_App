import React, { Fragment } from "react";
import foodImg from "../../Images/drinks3.jpeg";
import CartButton from "../SubComponents/CartButton";
import "./Header.css";

function Header() {
    return (
        <Fragment>
            <header className="header">
                <h1 className="logo">
                    <span className="logo-title">DRUNK BAR</span>
                    <span className="motto">I am so drunk</span>
                </h1>
                <CartButton />
            </header>

            <div className="HeaderImage">
                <img src={foodImg} alt="Cover" />
            </div>
        </Fragment>
    );
}

export default Header;
