import React from "react";
import "./CartButton.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
function CartButton() {
    return (
        <button>
            <span>
                <AiOutlineShoppingCart />
            </span>
            <span></span>
            <span></span>
        </button>
    );
}

export default CartButton;

