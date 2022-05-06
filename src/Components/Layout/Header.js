import React, { Fragment } from "react";
import foodImg from "../../Images/headerImg.jpeg";
import CartButton from "../SubComponents/CartButton";
import "./Header.css";

function Header() {
    return (
        <Fragment>
            <header className="header">
                <h1 className="logo">
                    <span className="logo-title">FOODMART</span>
                    <span className="motto">STAY AT HOME</span>
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
