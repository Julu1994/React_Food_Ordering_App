import React from "react";
import "./CartButton.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
function CartButton() {
    return (
        <button className="button">
            <span className="buttonIcon">
                <AiOutlineShoppingCart />
            </span>
            <span>Cart</span>
            <span className="buttonBadge">2</span>
        </button>
    );
}

export default CartButton;

